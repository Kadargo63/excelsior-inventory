import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"

function ProductItem(item) {

  const {
    image,
    name,
    _id,
    size,
    quantity
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>{size}</span>
      </div>
    </div>
  );
}

export default ProductItem;
