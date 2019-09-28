var mongoose = require('mongoose');

var hospitalSchema = new mongoose.Schema({
    _id:Number,
    name:{
        required: true,
        type:String
    },
    category:String,
    address:{
        required: true,
        type:String
    },
    state:{
        required: true,
        type:String
    },
    district:{
        required: true,
        type:String
    },
    pincode:{
        required: true,
        type:String
    },
    telephone:{
        required: true,
        type:String
    },
    emergency:{
        required: true,
        type:String
    },
    email:{
        required: true,
        type:String
    },
    website:{
        type:String
    },
    specialities:{
        type:Array
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    },
    facilities:{
        type:String
    }
    
    
})

module.exports = mongoose.model("Hospital",hospitalSchema);