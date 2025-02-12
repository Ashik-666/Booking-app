const {ShopReg,ShopLog,AddSeasts} = require('../UseCase/ShopUseCase')
const {AllShopFn,FindSeatFn} = require('../Repo/ShopRepo')
const ShopRegister =(req,res) =>{
    try {
        console.log(req.body,"arrived")
        ShopReg(req.body)
        res.json({
            message : "User created successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

const ShopLogin = (req,res) =>{
    try {
        ShopLog(req.body)
       
    } catch (error) {
        console.log(error)
    }
}

const AllShop = async (req,res) =>{
    try {
        console.log(req.body)
        let allshops = await AllShopFn()
    } catch (error) {
        
    }
}
const AddSeat = async (req,res) =>{
    try {
        AddSeasts(req.body)
        console.log(req.body,)
    } catch (error) {
        console.log(error)
    }
}  

const FindSeat =async (req,res) =>{
    try {
        console.log(req.params.id,"body")
        let Id =req.params.id;
        console.log(Id,"in controller")
        let seat = await FindSeatFn (Id)
        res.json({
            success:true,
            result:seat
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {ShopRegister,ShopLogin,AllShop,AddSeat,FindSeat}