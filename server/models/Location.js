const mongoose = require('mongoose')
const {Schema} = mongoose;
const onHands = require('./OnHands');


const locationSchema = new  Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    isCustomer: Boolean,
    contents: [onHands.Schema]
})

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;

