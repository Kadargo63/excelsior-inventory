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

export const MOVE_ITEMS = gql`
  mutation moveItems()
`