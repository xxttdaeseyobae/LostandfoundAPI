const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
    Breed: {
        type: String,
        required: true,
        trim:true
    },
    locationfound: {
        type: String,
        required: true,
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
    type: {
        type: String,
        required: true,
        trim:true
    },
    
});

module.exports = mongoose.model('Pets', petsSchema);