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
    location: ID
  }

  type Onhands {
      items: [Product]
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
    addUser(name: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
