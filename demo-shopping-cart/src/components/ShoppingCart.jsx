import React, { useState } from "react";
import Product from "./Product";
import CartModal from "./CartModal";

function ShoppingCart() {
  // Bước 1: Khai báo state dùng để lưu trữ data product
  const [dataProduct, setDataProduct] = useState([
    { id: 1, productName: "Áo Thun", price: 50 },
    { id: 2, productName: "Quần Jeans", price: 100 },
    { id: 3, productName: "Giầy Nike chính hãng", price: 200 },
  ]);

  // Bước 6: Khai báo state chứa các sản phẩm
  const [cartProduct, setCartProduct] = useState([]);

  // Bước 7: Khai báo hàm addToCart
  const addToCart = (product) => {
    // Tìm kiếm xem trong cartProduct và trong product (được gửi lên từ con) xem có id trùng nhau hay không
    const existingProduct = cartProduct.find((item) => item.id === product.id);
    // Check nếu có
    if (existingProduct) {
      // Sẽ cộng trường quantity thêm 1
      existingProduct.quantity += 1;
      // Bảo lưu lại cartProduct
      setCartProduct([...cartProduct]);
      // Nếu không có trong mảng cartProduct
    } else {
      // Bảo lưu lại cartProduct và thêm product (được gửi lên từ con) và thêm trường quantity
      setCartProduct([...cartProduct, { ...product, quantity: 1 }]);
    }
  };

  // Bước 8: Làm chức năng modal
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  // Bước 11: Xây dựng hàm tắt modal
  const closeModal = () => {
    setIsCartModalOpen(false);
  };

  // Bước 19: Viết hàm updateQuantity để truyền xuống cho con
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      const editQuantity = cartProduct.map((e) =>
        e.id === itemId ? { ...e, quantity: newQuantity } : e
      );
      setCartProduct(editQuantity);
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h3>Sản phẩm</h3>
        <ul>
          {/* Bước 2: Hiển thị dữ liệu từ state dataProduct*/}
          {dataProduct.map((element, index) => (
            <li key={index}>
              <Product elementProduct={element} addToCart={addToCart} />
            </li>
          ))}
        </ul>
      </div>
      {/* Bước 9: Set lại giá trị cho isCartModalOpen mỗi khi click => true*/}
      <button onClick={() => setIsCartModalOpen(true)}>
        Giỏ hàng: {cartProduct.length}
      </button>

      {/* Bước 10: Khi giá trị isCartModalOpen=true sẽ hiển thị CartModal */}
      {/* {isCartModalOpen ? <CartModal /> : ""} */}
      {/* Bước 12: Gửi hàm đóng modal xuống cho con */}
      {/* Bước 15: Gửi dữ liệu cartProduct xuống */}
      {/* Bước 20: Gửi hàm updateQuantity */}
      {isCartModalOpen && (
        <CartModal
          closeModal={closeModal}
          cartProduct={cartProduct}
          updateQuantity={updateQuantity}
        />
      )}
    </div>
  );
}

export default ShoppingCart;
