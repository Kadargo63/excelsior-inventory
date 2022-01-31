import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_ITEMS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';

function ItemList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ITEMS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_ITEMS,
        items: data.items,
      });
      // data.items.forEach((items) => {
      //   idbPromise('items', 'put', items);
      // });
    } 
    // else if (!loading) {
    //   idbPromise('items', 'get').then((items) => {
    //     dispatch({
    //       type: UPDATE_ITEMS,
    //       items: items,
    //     });
    //   });
    // }
  }, [data, loading, dispatch]);

  function filterItems() {
    if (!currentCategory) {
      return state.items;
    }

    return state.items.filter(
      (item) => item.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Items Available:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterItems().map((item) => (
            <ProductItem
              key={item._id}
              _id={item._id}
              image={item.image}
              name={item.name}
              size={item.size}
              quantity={item.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any items yet!</h3>
      )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default ItemList;
