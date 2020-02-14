const mongoose = require('mongoose');

const lostSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true
    },
    type:{
        type:String,
        trim:true
    },
    location: {
        type: String,
        required: true,
        trim:true
    },
    phone: {
        type: String,
        required: true,
        trim:true
    },
    details: {
        type: String,
        required: true,
        trim:true
    },
    image: {
        type: String
    },
    status: {
        type: String,
        required: true,
        trim:true
    },
    
});

module.exports = mongoose.model('Lost', lostSchema);