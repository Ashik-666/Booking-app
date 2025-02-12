const bcrypt =require ('bcryptjs')
const {CreateShop,ShopLogFn, AddseatFn} =require('../Repo/ShopRepo')
module.exports.ShopReg = async (data) =>{
    try {
        let {Password} = data
        const saltRound = 10;
        const  HashedPassword = await bcrypt.hash(Password,saltRound);
        data.Password = HashedPassword;
        console.log(HashedPassword,"hashed")
        console.log(data,"data saved in db")
        await CreateShop(data)
        return true
    } catch (error) {
        console.log(error)
    }
}
module.exports.ShopLog = async (data) => {
    try {
        console.log(data,"data in usecase")
        let {email} =data
        let Shop = await ShopLogFn(email)
        console.log(Shop,"Shoplog shop")
        Shop = Shop [0]
        console.log(Shop,"shop...")
        let result = await bcrypt.compare(data.Password,Shop.Password)
        if (result == true) {
            return Shop
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
    
}
module.exports.AddSeasts = async (data) =>{
    try {
        let date =new Date()
        data.date =date.toISOString().split("T")[0];
        AddseatFn(data)
    } catch (error) {
        console.log(error)
    }
}