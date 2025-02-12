const UserModel =require ('../Model/UserModel')
const SeatModel = require ('../../Shops/Model/SeatModel')
const BookingModel =require('../Model/BookingModel')
module.exports.useradding = async (data) =>{
    try {
        console.log(data)
        await UserModel.create(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports.UserLogFn = async (data) =>{
    try {
        console.log(data,"repo")
        let User = await UserModel.findOne({email:data}).select({
            Name:1,
            email:1,
            Password:1,
            _id:0
        })
        console.log(User,"from db selected user")
        return User
    } catch (error) {
        console.log(error)
        return false;
    }
}

module.exports.AllUserFn = async (data) =>{
    try {

       let AllUsers = await UserModel.find({})
       console.log(AllUsers,"in repo")
       return AllUsers  
    } catch (error) {
        console.log(error)
    }
}

module.exports.UserLoginInfo = async (data) =>{
    try {
        console.log(data,"in repo")
        let user = await UserModel.find(({email:data}))
        return user;
    } catch (error) {
        console.log(error)
    }
}

module.exports.SeatBookingFn = async (data) =>{
    try {
       
        let TableData = await SeatModel.find({Id:data})
        return TableData
    } catch (error) {
        console.log(error)
    }
}

module.exports.SeatBookigDataFn = async (data) =>{
    try {
        let BookingData = await BookingModel.create(data)
        console.log(BookingData,"in repo")
        return BookingData
    } catch (error) {
        console.log(error)
    }
}

module.exports.AvailablityCheckFn = async (data) =>{
    try {
        let TableData = await BookingModel.find({Id:data})
        TableData = TableData[0]
        return TableData
        
        
    } catch (error) {
        console.log(error)
    }
}

module.exports.BookingDataOfUser = async (bookingData) =>{
    console.log(bookingData,"from case")
    try {
        let Find_user = await UserModel.find({email:bookingData.User_email})
        Find_user = Find_user[0]
        console.log(Find_user,"USerDEtails")
        let Userinputs = bookingData
        console.log(Userinputs,"USER ENTERED DATA")
        Userinputs.user = Find_user
        console.log(Userinputs,"DBBBBBBB")

        let BookingDatazz = await BookingModel.create(Userinputs)
        console.log(BookingDatazz,"datab")
    } catch (error) {
        console.log(error)
    }
}

// module.exports.conformationFn = async (data) =>{
//     try {
//         let confoData = await BookingModel.create(data)
//         console.log(confoData , "in repo")
//     } catch (error) {
//         console.log(error)
//     }
// }
