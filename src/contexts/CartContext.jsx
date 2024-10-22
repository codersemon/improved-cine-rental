// dependencies
import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

// create and export cart context
export const CartContext = createContext(null);

// cart initialState
const initialState = [];

// create CartContext.Provider
const CartProvider = ({ children }) => {
  // cart reducer
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;