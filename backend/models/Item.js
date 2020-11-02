const mongoose = require('mongoose')
const { Schema } = mongoose;

const item = new Schema({
    imgUrl: String,
    title: String,
    price: String,
    location: String,
    description: String
})

module.exports = mongoose.model('Item', item);