const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    email: String,
    username: String,
    password: String
})

module.exports = mongoose.model("user", User)