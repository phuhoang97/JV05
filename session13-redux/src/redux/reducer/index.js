// Bước 5: Khai báo reducer: sử dụng combineReducers để gộp các reducer

import { combineReducers } from "redux";
import count from "./count";
import list from "./list";

const reducer = combineReducers({ count, list });

export default reducer;
