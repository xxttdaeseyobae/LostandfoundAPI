const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
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

module.exports = mongoose.model('Product', productSchema);