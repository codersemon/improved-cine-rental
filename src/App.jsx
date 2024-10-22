// dependencies
import { ToastContainer } from "react-toastify";
import CartProvider from "./contexts/CartContext";
import ThemeProvider from "./contexts/ThemeContext";
import Homepage from "./pages/Homepage";

import "react-toastify/dist/ReactToastify.css";

// component
const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <Homepage />
        <ToastContainer position="bottom-right" autoClose={2000} />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
