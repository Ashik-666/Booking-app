const express = require ('express')
const {ShopRegister,ShopLogin,AllShop,AddSeat,FindSeat} = require('../Controller/ShopController')
const router = express.Router()

router.route('/auth/ShopRegistration').post(ShopRegister)
router.route('/auth/ShopLogin').post(ShopLogin)
router.route('/AllShops').get(AllShop)
router.route('/AddSeat').post(AddSeat)
router.route('/FindSeat/:id').get(FindSeat)



module.exports =router