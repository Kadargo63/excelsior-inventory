const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    description: String
    image: String
    size: String
    quantity: Int
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
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addItem(products: [ID]!): Item
    addLocation(products: [ID]!): Location
    updateOnHands(products: [ID]!): Item
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
