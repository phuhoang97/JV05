import React, { useState } from "react";

function Thuchanh2() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  return (
    <div>
      <h3>Thuchanh2</h3>
      {products.map((e, index) => (
        <div key={index}>
          {e.name} - {e.price}
        </div>
      ))}
    </div>
  );
}

export default Thuchanh2;
