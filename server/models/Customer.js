const mongoose = require('mongoose')
const {Schema} = mongoose;
const Item = require('./Item')


const customerSchema = new  Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    checkedOut: [Item.schema]
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;