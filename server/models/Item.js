const mongoose = require('mongoose');
const onHands = require('./OnHands');
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
    quantity: {
        type: Number,
        min: 0,
    },
    inStockQuantity: {
        type: Number,
        min: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    locations: [onHands.Schema]
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;