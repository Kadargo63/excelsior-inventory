import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        size
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_QUANTITY = gql`
  mutation updateQuantity(
    $_id: ID!
    $quantity: Int!
  ) {
    updateQuantity(
      _id: $_id
      quantity: $quantity
    ){
      _id
      quantity
    }
  }
`;

export const DELETE_ITEM = gql`
mutation deleteItem(
  $_id: ID!
){
  deleteItem(
    _id: $_id
  ){
    _id
  }
}
`
