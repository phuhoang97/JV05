// Bước 10: Khai báo action
import * as actionType from "../constant/actionType";

export const act_count_up = (value) => {
  // console.log("Bước 1: Gửi Action lên Store");
  return {
    type: actionType.ACT_UP,
    payload: value,
  };
};

export const act_count_down = (value) => ({
  type: actionType.ACT_DOWN,
  payload: value,
});

export const act_list_random = (value) => ({
  type: actionType.ACT_RANDOM,
  payload: value,
});
