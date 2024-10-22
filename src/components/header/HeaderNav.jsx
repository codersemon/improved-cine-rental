// dependencies
import { useContext, useState } from "react";
import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun.svg";
import ringIcon from "../../assets/ring.svg";
import cartIcon from "../../assets/shopping-cart.svg";
import { CartContext } from "../../contexts/CartContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import CartModal from "../CartModal";

// component
const HeaderNav = () => {
  // cart modal show/hide state
  const [showCartDetails, setShowCartDetails] = useState(false);

  // cart context
  const { cartState } = useContext(CartContext);
  // theme context
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <>
      {showCartDetails && (
        <CartModal onClose={() => setShowCartDetails(false)} />
      )}

      <ul className="flex items-center space-x-5">
        <li>
          <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <img src={ringIcon} width={24} height={24} alt="Notification" />
          </button>
        </li>
        <li>
          <button
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            <img
              src={isDarkMode ? sunIcon : moonIcon}
              width={24}
              height={24}
              alt={isDarkMode ? "Light" : "Dark"}
            />
          </button>
        </li>
        <li>
          <button
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            onClick={() => setShowCartDetails(!showCartDetails)}
          >
            <img src={cartIcon} width={24} height={24} alt="Cart" />
            {cartState?.length > 0 && (
              <span className="absolute -right-3 -top-3 bg-primary/20 dark:bg-primary/[7%] w-6 h-6 rounded-full block text-sm">
                {cartState?.length}
              </span>
            )}
          </button>
        </li>
      </ul>
    </>
  );
};

export default HeaderNav;
