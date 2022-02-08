import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  // REMOVE_FROM_CART,
  // UPDATE_CART_QUANTITY,
  // ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { UPDATE_QUANTITY, DELETE_ITEM } from "../utils/mutations";
import { useDispatch, useSelector } from 'react-redux';

function Detail() {
  const state = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();

  const { id } = useParams();


  const [currentProduct, setCurrentProduct] = useState({});
  

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      // data.products.forEach((product) => {
      //   idbPromise('products', 'put', product);
      // });
     }
    // get cache from idb
    // else if (!loading) {
    //   idbPromise('products', 'get').then((indexedProducts) => {
    //     dispatch({
    //       type: UPDATE_PRODUCTS,
    //       products: indexedProducts,
    //     });
    //   });
    // }
  }, [products, data, loading, dispatch, id]);

  const [updateQuantity] = useMutation(UPDATE_QUANTITY)
  const [deleteItem] = useMutation(DELETE_ITEM)

  const {
    _id,
    quantity
  } = currentProduct;
const [currentQuantity, setCurrentQuantity] = useState(quantity)
  async function increment ()  {
      const updated = await updateQuantity({ variables: { _id, quantity: quantity + 1 } });
        setCurrentQuantity(updated.data.updateQuantity.quantity)
        window.location.reload()

   };
   async function decrement () {
    const updated = await updateQuantity({ variables: { _id, quantity: quantity - 1 } });
    setCurrentQuantity(updated.data.updateQuantity.quantity)
    window.location.reload()
   };
   async function dbDelete () {
    const updated = await deleteItem({ variables: { _id} });
    window.location.assign('/')
   }
  ;

  return (
    <>
      {currentProduct && cart ? (
        <div className="detail">
          <div clasName="detail-row">
          <Link to="/">← Back to Items</Link>
        </div>
        <div className="detail-row">
          <div>
            <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          /></div>
          <div>
            <h2>{currentProduct.name}</h2>

            <p>{currentProduct.description}</p>


            <p>
              <strong>Size:</strong>  {currentProduct.size}{' '} <br />
              <strong>Quantity:</strong>  {currentQuantity || currentProduct.quantity}{' '}
            </p>
          </div>
        </div>
          <p>
            <button onClick={increment}>Check In</button>
            <button onClick={decrement}>Check Out</button>            
            <button
            
            onClick={dbDelete}
            >
              Delete
            </button>
          </p>


        </div>
      ) : null}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </>
  );
      }

export default Detail;
