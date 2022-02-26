const express = require('express')

const bikeRouter = express.Router()

const Bike = require('../models/Bike')

// Get all bikes
bikeRouter.get('/', async (req, res) => {
    try {
        const bikes = await Bike.find()
        res.json(bikes)
    } catch (err) {
        res.json({ message: err })
    }
})

// post a motorcycle
bikeRouter.post('/', async (req, res) => {
    const bike = new Bike({
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        color: req.body.color,
        CC: req.body.CC,
        price: req.body.price,
        COGS: req.body.COGS,
        revenue: req.body.revenue,
        NADA: req.body.NADA,
        KBB: req.body.KBB,
        miles: req.body.miles,
        VIN: req.body.VIN,
        notes: req.body.notes,
        dateListed: req.body.dateListed,
        dateSold: req.body.dateSold,
        sold: req.body.sold,
        customer: req.body.customer,
        dealer: req.body.dealer,
    })
    try {
        const savedBike = await bike.save()
        res.json(savedBike)
    } catch (err) {
        res.json({ message: err })
    }
})

// delete selected bike
bikeRouter.delete('/:bikeId', async (req, res) => {
    try {
        const removedBike = await Bike.deleteOne({_id: req.params.bikeId})
        res.json(removedBike)
    } catch (err) {
        res.json({ message: err })
    }
})

// update selected bike
bikeRouter.put('/:bikeId', async (req, res) => {
    try {
        const updatedBike = await Bike.updateOne(
            { _id: req.params.bikeId },
            { $set: {
                year: req.body.year,
                make: req.body.make,
                model: req.body.model,
                color: req.body.color,
                CC: req.body.CC,
                price: req.body.price,
                COGS: req.body.COGS,
                revenue: req.body.revenue,
                NADA: req.body.NADA,
                KBB: req.body.KBB,
                miles: req.body.miles,
                VIN: req.body.VIN,
                notes: req.body.notes,
                dateListed: req.body.dateListed,
                dateSold: req.body.dateSold,
                sold: req.body.sold,
                customer: req.body.customer,
                dealer: req.body.dealer
            }}
        )
        res.json(updatedBike)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = bikeRouter;
