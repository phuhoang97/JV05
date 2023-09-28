import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { downQuantity, removeItem, upQuantity } from "../redux/cartAction";

function CartItem() {
  const cart = useSelector((state) => state.item);
  const dispatch = useDispatch();

  const totalItem = (cart) => {
    let total = 0;
    for (const key of cart) {
      total += key.price * key.quantity;
    }
    return total;
  };

  return (
    <div>
      <h2>Cart Product</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button
              onClick={
                item.quantity <= 1
                  ? () => dispatch(removeItem(item.id))
                  : () => dispatch(downQuantity(item.id))
              }
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(upQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>Total: ${totalItem(cart)}</div>
    </div>
  );
}

export default CartItem;
