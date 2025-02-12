const bcrypt =require ('bcryptjs')
const jwt = require('jsonwebtoken')
const {useradding,UserLogFn,SeatBookingFn,SeatBookigDataFn,AvailablityCheckFn,BookingDataOfUser} =require('../Repo/UserRepo')
module.exports.userReg = async (data) =>{
   try {
    let {Password} = data 
    const saltRound = 10;
    const HashedPassword = await bcrypt.hash(Password,saltRound);
    data.Password =HashedPassword;
    useradding(data)
   } catch (error) {
    console.log(error)
   }
}

module.exports.UserLog = async (data) =>{
   try {
      let {email} =data
      let User = await UserLogFn(email)
      let result = await bcrypt.compare(data.Password,User.Password)
      if (result == true) {
         return User
      } else {
         return false
      }
   } catch (error) {
      console.log(error)
      return false;
   }
}

module.exports.CheckUserLogin = async (data) =>{
   try { 
      let {email} =data;
      let users = await UserLoginInfo(email)
      console.log(users)
      users =users[0];
      let result = await bcrypt.compare(data.password,users.password)
      console.log(result)
      if (result == true){
         return users
      }
      else{
         return false
      }
   } catch (error) {
      console.log(error)
   }
}

module.exports.BookingSeat = async (data) =>{
   try {
      let {Id} = data 
      let TableData = await SeatBookingFn (Id)
      TableData = TableData [0];
      console.log(TableData,"--tabledata")
      let AvailableSeats = TableData.AvailableSeat
      let userdata =data.Nofseats
      let updatedseat =parseInt(AvailableSeats) - parseInt(userdata)
      console.log(updatedseat,"balance seat")
      let {Nofseats} =data
      let RatePerSeat = TableData.Rate/TableData.SeatPertable
      let TotalRate = Nofseats * RatePerSeat;
      console.log(TotalRate)
      data.Availablenow = updatedseat
      SeatBookigDataFn(data)
      console.log(data,"---")
      return (TotalRate)
   } catch (error) {
      console.log(error)
   }
}


module.exports.availability = async(data,req) => {
   try {
      let {Id, Nofseats, Datee,StartingTime} = data;
      let TableData = await AvailablityCheckFn(Id);
      console.log(TableData, "Table Data at usecase");
      const UserDate = TableData.Date;
      const AvailableSeats = TableData.Availablenow;
      console.log(AvailableSeats,"available")
      if (UserDate=== Datee){
         console.log("Requested Seats:", Nofseats);
         if (parseInt(Nofseats) <= AvailableSeats) {
            console.log(AvailableSeats,"booked");
            data.Availablenow = AvailableSeats
            const secretkey= process.env.BCRYPT_SECRET_KEY;

            const token = req.headers['authorization']?.split(' ')[1];
            const decoded = jwt.verify(token, "mysecretkey");
            console.log(decoded, "decoded");
            let User_email = decoded.id
            
            
            const bookingData = {
               User_email,
               Nofseats,
               Datee,   
               StartingTime,
               Id,
               AvailableSeats
           };
           
           BookingDataOfUser(bookingData);
            return true;
         } else {
            console.log("booking failed, AVAILABLE SEATS", AvailableSeats);
            return false;
         }
      } else {
         console.log("Date mismatch: ", UserDate, Datee);
         return false;
      }
   } catch (error) {
      console.log(error);
   }
};

// module.exports.conformation = async (data) =>{
//    try {
//       console.log(data ,"at jyjvjcj")
//       data.Availablenow = AvailableSeats
//             console.log(Availablenow,"SEat")
//             conformationFn(data)
//       let confoData = await conformationFn (data)
//        const token = req.headers['authorization']?.split(' ')[1];
//        const decoded = jwt.verify(token, secretKey);
//        console.log(decoded,"decoded")
//    } catch (error) {
//       console.log(error)
//    }
// }
