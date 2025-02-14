const express = require('express') 
const App = express()
const cors = require("cors");

const UserRouter = require('./Users/Routes/UserRouter')
const ShopRouter = require('./Shops/Routes/ShopRouter')
const connection = require('./Config/Config')

App.use(express.json())
App.use(express.urlencoded({ extended:false}));
App.use(cors());

async function dbCall(){
    try {
       await connection()
       console.log("db conncted successfully!!")
    } catch (error) {
       console.log(error) 
    }
}dbCall()


App.use('/Users',UserRouter)
App.use('/Shops',ShopRouter)

App.listen(3000,()=>{
    console.log('hosted')
})