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

  const  categories  = [
    { name: 'Leotards',
    _id
    :
    '61f6adab70bbb9579c0daeb3' },
    { name: 'Lyrical Dresses',
    _id
    :
    '61f6adab70bbb9579c0daeb4' },
    { name: 'Tutu Dresses',
    _id
    :
    '61f6adab70bbb9579c0daeb5' },
    { name: 'Skirts/Tutus',
    _id
    :
    '61f6adab70bbb9579c0daeb6' },
    { name: 'Shoes',
    _id
    :
    '61f6adab70bbb9579c0daeb7' }
  ];

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
    <div>
      <h2>Choose a Category:</h2>
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
