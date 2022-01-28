const mongoose = require('mongoose')
const {Schema} = mongoose;
const Item = require('./Item')


const onHandsSchema = new  Schema({
    item_id:     {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      },
    bin_id:     {
        type: Schema.Types.ObjectId,
        ref: 'Location'
      },
    quantity: {
        type: Number,
        min: 0,
    }
})

const onHands = mongoose.model('onHands', onHandsSchema);

module.exports = onHands;