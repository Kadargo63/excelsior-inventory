const mongoose = require('mongoose')
const {Schema} = mongoose;


const itemSchema = new  Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: String
    },
    image: {
        type: String
    },
    color: {
        type: String
    },
    quantity: {
        type: Number,
        min: 0,
    },
    category: [{
        type: String
    }]
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;