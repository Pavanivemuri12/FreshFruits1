const mongoose = require('mongoose')

const OrganicFruitsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})


const OrganicFruits = mongoose.model("OrganicFruits", OrganicFruitsSchema)

module.exports = OrganicFruits
