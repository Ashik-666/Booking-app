const { userReg, UserLog,BookingSeat,availability,  } = require('../UseCase/UserUseCase')
const jwt = require('jsonwebtoken')
const { AllUserFn,SeatBookigDataFn,AvailablityCheckFn ,BookingDataOfUser} = require('../Repo/UserRepo')
const userRegistration = (req, res) => {
    try {
        userReg(req.body)

    } catch (error) {
        console.log(error)
    }
}
const UserLogin = async (req, res) => {
    try {
        const user = await UserLog(req.body)
        console.log(user, "user")
        if (user !== false) {
            const secretkey = 'mysecretkey';
            let token = jwt.sign({ id: user.email }, secretkey, { expiresIn: '1h'})
            console.log(token,"bcibwcibiwbciwbcib")
            
            
            res.json({
                succsess: true,
                result: token,
                data: user
            })
        } else {
            res.json({
                succsess: true,
                result: "invalid password or email"
            })
        }


    } catch (error) {
        console.log(error)
    }
}

const AllUser = async (req, res) => {
    try {
        console.log(req.body)
        let allusers = await AllUserFn()
    } catch (error) {

    }
}

const SeatBooking = async (req , res) =>{
    try {
      
        let SeatBooking = await SeatBookigDataFn (req.body)
        let TotalRate = await BookingSeat (req.body)
        console.log(TotalRate,"total cost")
        res.json({
            TotalCost:TotalRate
        })
    } catch (error) {
        console.log(error)
    }
}

const AvailablityCheck = async (req , res) =>{
    console.log(req.body ,"hjhyghbhg")
    try {
      let data = await  availability(req.body,req)
    } catch (error) {
        console.log(error)
    }
}

// const confirmBooking = async (req , res ) =>{
//     try {
//         conformation(req.body)
//     } catch (error) {
//         console.log(error)
//     }
// }
module.exports = { userRegistration, UserLogin, AllUser ,SeatBooking,AvailablityCheck,}