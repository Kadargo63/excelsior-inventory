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
import { UPDATE_QUANTITY } from "../utils/mutations";
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

  const [updateQuantity, {data2}] = useMutation(UPDATE_QUANTITY)

  const {
    image,
    name,
    _id,
    size,
    quantity
  } = currentProduct;
const [currentQuantity, setCurrentQuantity] = useState(quantity)
  async function increment ()  {
    const {_id, quantity} = currentProduct;
    console.log(currentQuantity, quantity, 'before')
      const updated = await updateQuantity({ variables: { _id, quantity: quantity + 1 } });
        setCurrentQuantity(quantity)
        console.log(currentQuantity, quantity, 'after', updated)
   };
   const decrement = () => {};
   const deleteItem = () => {}
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
            //disabled={!cart.find((p) => p._id === currentProduct._id)}
            //onClick={removeFromCart}
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
