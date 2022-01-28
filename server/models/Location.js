const mongoose = require('mongoose')
const {Schema} = mongoose;
const Item = require('./Item')


const locationSchema = new  Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    contents: [Item.Schema]
})

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;