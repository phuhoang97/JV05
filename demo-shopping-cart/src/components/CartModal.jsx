import React from "react";

// Bước 13: Nhận hàm
// Bước 16: Nhận dữ liệu từ cartProduct
function CartModal({ closeModal, cartProduct, updateQuantity }) {
  return (
    <div>
      <div>
        <h1>Cart Product</h1>
        {/* Bước 14: Viết sự kiện cho hàm */}
        <button onClick={closeModal}>Close</button>
      </div>
      <ul>
        {/* Bước 17: Hiển thị dữ liệu */}
        {cartProduct.map((e, i) => (
          <li key={i}>
            <p>
              {e.productName} - {e.price}
              {/* Bước 18: viết hàm updateQuantity để cập nhật lại số lượng */}
              <button
                onClick={() => updateQuantity(e.id, e.quantity - 1)}
                disabled={e.quantity <= 1}
              >
                -
              </button>
              <span>{e.quantity}</span>
              <button onClick={() => updateQuantity(e.id, e.quantity + 1)}>
                +
              </button>
              <button>Delete</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartModal;
