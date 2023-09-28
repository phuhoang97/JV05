// Bước 1: Khai báo state ban đầu
const initialState = {
  item: [],
};

// Bước 2: Khai báo reducer, cartReducer nhận vào 2 tham số:
// 1 là state hiện tại
// 2 là action
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addToCart":
      // sử dụng findIndex => tìm kiếm kiếm index của sản phẩm
      // => id có giống với id được thêm vào
      const existingProduct = state.item.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProduct !== -1) {
        const updateItem = [...state.item];
        updateItem[existingProduct].quantity += 1;
        return { ...state, item: updateItem };
      } else {
        return {
          ...state,
          item: [...state.item, { ...action.payload, quantity: 1 }],
        };
      }

    case "removeItem":
      return {
        ...state,
        item: state.item.filter((item) => item.id !== action.payload),
      };

    case "upQuantity":
      // Cách 1:
      const indexItem = state.item.findIndex(
        (item) => item.id === action.payload
      );
      const newItem = [...state.item];
      newItem[indexItem].quantity += 1;

      return { ...state, item: newItem };

    // Cách 2:
    // const newItem = state.item.map((e) =>
    //   e.id === action.payload.id
    //     ? { ...e, quantity: e.quantity + 1 }
    //     : { ...action.payload, quantity: 1 }
    // );

    // return {
    //   ...state,
    //   item: newItem,
    // };

    case "downQuantity":
      const indexItem1 = state.item.findIndex(
        (item) => item.id === action.payload
      );
      const newItem1 = [...state.item];
      newItem1[indexItem1].quantity -= 1;
      return { ...state, item: newItem1 };

    default:
      break;
  }
  return state;
};

export default cartReducer;
