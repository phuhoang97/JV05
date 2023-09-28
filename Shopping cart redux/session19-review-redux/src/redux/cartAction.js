export const addToCart = (product) => {
  return {
    type: "addToCart",
    payload: product,
  };
};

export const removeItem = (productId) => {
  return {
    type: "removeItem",
    payload: productId,
  };
};

export const upQuantity = (productId) => {
  return {
    type: "upQuantity",
    payload: productId,
  };
};

export const downQuantity = (productId) => {
  return {
    type: "downQuantity",
    payload: productId,
  };
};
