// Bước 3: import action để sử dụng
import * as actionType from "../constant/actionType";

// Bước 1: Khai báo giá trị khởi tạo
const initalState = 0;

// Bước 4: khai báo reducer
// state: hiện tại
// action
const count = (state = initalState, action) => {
  // console.log("Bước 2: dựa vào state hiện tại và action được gửi lên");
  // console.log("action", action);
  switch (action.type) {
    case actionType.ACT_UP:
      state += action.payload;
      return state;
    case actionType.ACT_DOWN:
      state -= action.payload;
      return state;
    default:
      break;
  }
  return state;
};

export default count;
