const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    image: String
    quantity: Int
    size: String
    category: Category
    location: ID
  }

  type Onhands {
      items: [Item]
      location: ID
      quantity: Int
  }

  type Location {
    _id: ID
    products: [Product]
  }

  type User {
    _id: ID
    name: String
    email: String
    orders: [Order]
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
    items(category: ID, name: String): [Item]
    item(_id: ID!): Item
    onHands(location: ID, item: ID): OnHands
    user: User
<<<<<<< HEAD
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addItem(products: [ID]!): Item
    addLocation(products: [ID]!): Location
    updateOnHands(products: [ID]!): Item
=======
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
>>>>>>> feature/ri-typedefs
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
