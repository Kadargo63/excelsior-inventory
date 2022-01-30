import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
      }
    }
  }
`

export const UPDATE_INVENTORY = gql`
  mutation updateInventory($onHands: ID, $quantitiy: quantitiy) {
      udateInventory(onHands: $onHands, quantity: $quantity) {
          onHands {
              bin_id
              item_id
              quantity
          }
      }
  }
`