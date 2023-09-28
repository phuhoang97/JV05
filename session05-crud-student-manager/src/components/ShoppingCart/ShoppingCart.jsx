import React, { useState } from "react";
import Product from "./Product";
import CartModal from "./CartModal";

const products = [
  { id: 1, name: "Áo thun", price: 20 },
  { id: 2, name: "Quần jeans", price: 50 },
  { id: 3, name: "Giày thể thao", price: 40 },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      const updatedItems = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedItems);
    }
  };

  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Sản phẩm</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Product product={product} addToCart={addToCart} />
            </li>
          ))}
        </ul>
      </div>
      <div className='cart-icon' onClick={openCartModal}>
        Giỏ hàng ({cartItems.length})
      </div>
      {isCartModalOpen && (
        <CartModal
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
          onClose={closeCartModal}
        />
      )}
    </div>
  );
};

export default ShoppingCart;
