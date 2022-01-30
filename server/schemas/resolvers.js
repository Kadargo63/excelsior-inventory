const { AuthenticationError } = require('apollo-server-express');
const { Product, Location, User } = require('../models');
const { signToken } = require('../utils/auth');
//create resolvers
const resolvers = {
    Query: {
        //categories
        categories: async () => {
            return await Category.find();
        },
        //items
        products: async (parent, { category, name }) => {
            const params = {};
            if (category) {
              params.category = category;
            }
            if (name) {
              params.name = {
                $regex: name
              };
            }
            return await Product.find(params).populate('category');
        },
        //item
        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
        },
        //user
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
                populate: 'category'
              });
              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
              return user;
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        //add user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        // //add item
        // addProduct: async (parent, args) => {
        //   const item = await Product.create(args);
        //   return { item };
        // },
        //add location
        // addLocation: async (parent, args) => {
        //   const location = await Location.create(args);
        //   return { location };
        // },
        //update on hand
        // updateOnHands: async (parent, { _id, quantity }) => {
        //     const decrement = Math.abs(quantity) * -1;
        //     return await OnHands.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        // },
        //login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        }
    }
}
//export resolvers
module.exports = resolvers







