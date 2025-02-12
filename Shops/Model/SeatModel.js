const mongoose =require('mongoose');

const SeatSchema = new mongoose.Schema({

    Tables:{
        type:String,
        require:true
    },
    SeatPertable:{
        type:String,
        require:true
    },
    Rate:{
        type:String,
        require:true
    },
    Id:{
        type:String,
        require:true,
        unique:true
    },
    date:{
        type:String,
        require:true
    },
    AvailableSeat:{
        type:Number
    },
   
})


const SeatModel =mongoose.model('ShopSeat',SeatSchema)
module.exports = SeatModel;