import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartAction";

function Product({ item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
