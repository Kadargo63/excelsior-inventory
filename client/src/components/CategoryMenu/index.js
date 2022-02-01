import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
// import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';

function CategoryMenu() {
  const state = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();

  const { categories } = state;

  // const  categories  = [
  //   { name: 'Leotards',
  //   _id
  //   :
  //   '61f6fec31f7b5961fcbaabf1' },
  //   { name: 'Lyrical Dresses',
  //   _id
  //   :
  //   '61f6fec31f7b5961fcbaabf2' },
  //   { name: 'Tutu Dresses',
  //   _id
  //   :
  //   '61f6fec31f7b5961fcbaabf3' },
  //   { name: 'Skirts/Tutus',
  //   _id
  //   :
  //   '61f6fec31f7b5961fcbaabf4' },
  //   { name: 'Shoes',
  //   _id
  //   :
  //   '61f6fec31f7b5961fcbaabf5' }
  // ];

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } 
    else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="category-menu">
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
