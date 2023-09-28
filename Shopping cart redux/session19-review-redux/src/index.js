import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import provider => chia sẻ dữ liệu trong ứng dụng
import { Provider } from "react-redux";
// Import reducer => dữ liệu để chia sẻ và xử lý logic
import cartReducer from "./redux/cartReducer";
// Import createStore => để tạo store cho ứng dụng
import { createStore } from "redux";

// Tạo store cho ứng dụng
const store = createStore(cartReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Chia sẻ dữ liệu cho ứng dụng
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
