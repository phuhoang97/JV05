import React from "react";
import Product from "./Product";
import CartItem from "./CartItem";

function ListProduct() {
  const product = [
    { id: 1, name: "Sản phẩm 1", price: 20000 },
    { id: 2, name: "Sản phẩm 2", price: 40000 },
    { id: 3, name: "Sản phẩm 3", price: 60000 },
  ];

  return (
    <div>
      <div>
        {product.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
      <CartItem />
    </div>
  );
}

export default ListProduct;
