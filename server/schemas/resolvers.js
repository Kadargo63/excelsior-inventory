const { AuthenticationError } = require('apollo-server-express');
const { Customer, Item, Location, User } = require('../models');
const { signToken } = require('../utils/auth');

//create our resolvers
const resolvers = {
    Query: {
        //Item.find() - get all items
        //Item.findOne - get single item
    },

    Mutation: {
        //add user?
        //login
        //add item
        //update single item
    }
}

//export resolvers
module.exports = resolvers