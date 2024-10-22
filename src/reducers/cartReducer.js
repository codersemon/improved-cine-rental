// export cart reducer
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_IN_CART": {
      return [...state, action.payload];
    }
    case "REMOVE_ITEM_FROM_CART": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};
