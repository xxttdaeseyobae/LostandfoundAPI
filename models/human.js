const mongoose = require('mongoose');

const humanSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim:true
    },
    locationfound: {
        type: String,
        required: true,
        trim:true
    },
    age: {
        type: String,
        trim:true
    },
    sex: {
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

module.exports = mongoose.model('Human', humanSchema);