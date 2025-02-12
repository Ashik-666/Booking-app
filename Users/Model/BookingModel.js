const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
    Nofseats :{
        type:String,
        require:true
    },

    Date :{
        type:String,
        require:true
    },

    StartingTime :{
        type:String,
        require:true
    },

    Id :{
        type:String,
        require:true
    },
    Availablenow:{
        type:Number
    },
    User_email:{
        type:String,
        require:true
    },
    AvailableSeats:{
        type:String,
        require:true
    },
    Datee:{
        type:String,
        require:true
    },
    user: {
        type: Object, // Embeds the UserSchema here
        required: true
    }
})

const BookingModel =mongoose.model('Booking',BookingSchema);
module.exports =BookingModel