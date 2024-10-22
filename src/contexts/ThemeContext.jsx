/* eslint-disable react/prop-types */
// dependencies
import { createContext, useState } from "react";

// create and export ThemeContext
export const ThemeContext = createContext(null);

// create ThemeContext.Provider
const ThemeProvider = ({ children }) => {
  //
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export ThemeContext.Provider
export default ThemeProvider;
