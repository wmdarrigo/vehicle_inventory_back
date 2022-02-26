const mongoose = require('mongoose')

// Schema for motorcycles

const BikeSchema = mongoose.Schema({
    year: Number,
    make: String,
    model: String,
    color: String,
    CC: Number,
    price: Number,
    COGS: Number,
    revenue: Number,
    NADA: Number,
    KBB: Number,
    miles: Number,
    VIN: String,
    notes: String,
    dateListed: Date,
    dateSold: Date,
    sold: {
        type: Boolean,
        default: false,
    },
    customer: mongoose.ObjectId,
    dealer: mongoose.ObjectId,
})

module.exports = mongoose.model('Bike', BikeSchema);