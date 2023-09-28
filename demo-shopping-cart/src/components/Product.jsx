import React from "react";

// Bước 3: Nhận props từ component cha
function Product({ elementProduct, addToCart }) {
  //   console.log(elementProduct);
  return (
    <div>
      {/* Bước 4: Hiển thị dữ liệu nhận được */}
      <h3>{elementProduct.productName}</h3>
      <p>{elementProduct.price}</p>
      {/* Bước 5: Viết hàm addToCart */}
      <button onClick={() => addToCart(elementProduct)}>Add to cart</button>
    </div>
  );
}

export default Product;
