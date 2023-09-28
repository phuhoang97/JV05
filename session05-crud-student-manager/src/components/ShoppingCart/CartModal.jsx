import React from "react";
import "./CartModal.css";

const CartModal = ({ cartItems, onUpdateQuantity, onRemoveItem, onClose }) => {
  return (
    <div className='cart-modal'>
      <div className='cart-header'>
        <h2>Giỏ hàng</h2>
        <button onClick={onClose}>Đóng</button>
      </div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            {item.quantity}
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            \<button onClick={() => onRemoveItem(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartModal;
