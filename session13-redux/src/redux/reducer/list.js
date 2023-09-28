import * as actionType from "../constant/actionType";

const initalState = [3, 5, 7, 9];

const list = (state = initalState, action) => {
  switch (action.type) {
    case actionType.ACT_RANDOM:
      state = [...state, Math.floor(Math.random() * 10)];
      return state;
    default:
      break;
  }
  return state;
};

export default list;
