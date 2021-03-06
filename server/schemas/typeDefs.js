const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Product {
    _id: ID
    name: String
    image: String
    quantity: Int
    size: String
    category: Category
  }
  type Onhands {
      items: [Product]
      location: ID
      quantity: Int
  }
  type Location {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
  type Checkout {
    session: ID
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateQuantity(quantity: Int!, _id: ID!): Product
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    deleteItem(_id: ID!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;