import {gql} from '@apollo/client'

export const QUERY_ITEM = gql`
    query getItem($ID: ID) {
        items(ID: $ID) {
            _id
            name 
            size
            image
            quantity
            category
            locations {
                _id
                bin_id
                quantitiy
            }
        }
    }
`

export const QUERY_ALL_ITEMS = gql`
    {
        items {
            _id
            name 
            size
            image
            quantity
            category
        }
    }
`

export const QUERY_LOCATION = gql`
    query getLocation($ID: ID) {
        locations(ID: $ID) {
            _id
            name
            isCustomer
            contents {
                _id
                item_id
                quantitiy
            }
`

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`