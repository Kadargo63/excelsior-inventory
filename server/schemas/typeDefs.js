const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    size: String
    quantity: Int
    category: Category
    bin: ID
    orderLink: String
  }

  type Inventory {
    bins: [Bin]
    onhand: [Onhands]
  }

  type Onhands {
      product: [Product]
      quantity: Int
  }

  type Bin {
    _id: ID
    lastBinnedDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
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
    inventory(_id: ID!): Inventory
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addInventory(products: [ID]!): Inventory
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    updateInventory(products: [ID]): Inventory
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
