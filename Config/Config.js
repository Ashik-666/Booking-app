const mongoose = require("mongoose")
const connectDB =()=>{
    try {
        return mongoose.connect('mongodb+srv://User:1234@cluster0.qoav2.mongodb.net/Bookingseats?retryWrites=true&w=majority&appName=Cluster0')
    } catch (error) {
        console.log("error")
    }
}
module.exports = connectDB;