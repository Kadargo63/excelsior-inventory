import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import Cart from '../components/Cart';
// import { useStoreContext } from '../utils/GlobalState';
import {
  // REMOVE_FROM_CART,
  // UPDATE_CART_QUANTITY,
  // ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
// import { idbPromise } from '../utils/helpers';
// import spinner from '../assets/spinner.gif';
import { useDispatch, useSelector } from 'react-redux';

function Detail() {
  const state = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();

  const { id } = useParams();
  //const {
  //  image,
  //  name,
  //  _id,
  //  size,
  //  quantity
  //} = item;

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

// const addToCart = () => {
//   const itemInCart = cart.find((cartItem) => cartItem._id === id);
//   if (itemInCart) {
//     dispatch({
//       type: UPDATE_CART_QUANTITY,
//       _id: id,
//       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//     });
//     // idbPromise('cart', 'put', {
//     //   ...itemInCart,
//     //   purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//     // });
//   } else {
//     dispatch({
//       type: ADD_TO_CART,
//       product: { ...currentProduct, purchaseQuantity: 1 },
//     });
//     // idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
//   }
// };

 // const increment = () => {
 //   console.log(_id, quantity)
 //       updateQuantity({ variables: { _id: _id, quantity: quantity + 1 } });
 // };

  // const removeFromCart = () => {
  //   dispatch({
  //     type: REMOVE_FROM_CART,
  //     _id: currentProduct._id,
  // //   });

  //   // idbPromise('cart', 'delete', { ...currentProduct });
  // };

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
              <strong>Quantity:</strong>  {currentProduct.quantity}{' '}
            </p>
          </div>
        </div>
          <p>
            <button >Check In</button>
            <button >Check Out</button>            
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
