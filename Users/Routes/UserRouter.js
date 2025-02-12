const express = require ('express');
const {userRegistration,UserLogin,AllUser,SeatBooking,AvailablityCheck,confirmBooking} =require ('../Controller/UserController')
const {VerifyToken} = require('../../Middleware/Middleware')
const router = express.Router()

router.route('/auth/adduser').post(userRegistration)
router.route('/auth/UserLogin').post(UserLogin)
router.route('/AllUser').get(VerifyToken,AllUser)
router.route('/SeatBooking').post (SeatBooking)
router.route('/AvailablityCheck').post(AvailablityCheck)
// router.route('/confirmBooking').post(confirmBooking)
module.exports =router