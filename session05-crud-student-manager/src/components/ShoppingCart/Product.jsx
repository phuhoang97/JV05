import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Giá: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default Product;
