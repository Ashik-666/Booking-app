const ShopModel =require ('../Model/ShopModel')
const SeatModel = require ('../Model/SeatModel')
module.exports.CreateShop =async(data) =>{
    try {
        await ShopModel.create(data)
        
        return true
    } catch (error) {
       console.log(error) 
    }
}

module.exports.ShopLogFn = async (data) =>{
    try {
        console.log(data,"data in repo")
        let Shop = await ShopModel.find({email:data})
       console.log(Shop,"shops in repo")
        return Shop
       
    } catch (error) {
        console.log(error)
    }
}
module.exports.AllShopFn = async (data) =>{
    try {
       let AllShops = await ShopModel.find({})
       console.log(AllShops,"in repo")
       return AllShops
    } catch (error) {
        console.log(error)
    }
}

module.exports.AddseatFn = async (data) =>{
    try {
        console.log(data,"data in repo")
        await SeatModel.create(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports.FindSeatFn = async (data) =>{
    try {
        console.log(data,"in repo")
        let Seats = await SeatModel.find({Id:data})
        return Seats
    } catch (error) {
        console.log(error)
    }
}