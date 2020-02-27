var mongoose = require('mongoose');

var hospitalSchema = new mongoose.Schema({
    _id:Number,
    name:{
        type:String
    },
    category:String,
    address:{
        type:String,
    },
    state:{
        type:String,
    },
    district:{
        type:String,
    },
    pincode:{
        type:String,
    },
    telephone:{
        type:String,
    },
    emergency:{
        type:String,
    },
    email:{
        type:String,
    },
    website:{
        type:String,
    },
    specialties:{
        type:String,
    },
    location:{
        type: {
            type:String
        },
        coordinates:[
            Number,
            Number
        ],
        },
    facilities:{
        type:String
    },
    bloodbank:{
        type:String
    },
    place:{
        type:String
    }
    
    
})

module.exports = mongoose.model("Hospital",hospitalSchema);