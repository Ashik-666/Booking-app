const mongoose =require('mongoose');

const ShopSchema = new mongoose.Schema({
    Name:{
        type: String,
        require:true
    },
    Id:{
        type:String,
        unique:true,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    Password:{
        type:String,
        require:true
    }
})

const ShopModel = mongoose.model('Shop', ShopSchema);
module.exports = ShopModel
