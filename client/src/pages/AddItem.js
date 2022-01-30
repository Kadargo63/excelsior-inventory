import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
import { ADD_ITEM } from '../utils/mutations';

function AddItem(props) {
  const [formState, setFormState] = useState({ name: '', size: '' });
  const [addItem] = useMutation(ADD_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addItem({
      variables: {
        name: formState.name,
        size: formState.size,
        quantity: formState.quantity
      },
    });
    // const token = mutationResponse.data.addUser.token;
    // Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/addItem">Add Item</Link>

      <h2>Add Item</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Name"
            name="name"
            type="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="image">Image:</label>
          <input
            placeholder="Image"
            name="image"
            type="image"
            id="image"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="category">Category:</label>
          <input
            placeholder="Category"
            name="category"
            type="category"
            id="category"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="size">Size:</label>
          <input
            placeholder="Size"
            name="size"
            type="size"
            id="size"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="quantity">Quantity:</label>
          <input
            placeholder="Quantity"
            name="quantity"
            type="quantity"
            id="quantity"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="location">Location:</label>
          <input
            placeholder="Location"
            name="location"
            type="location"
            id="location"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
