'use client'
import { createContext, useState, ReactNode, useEffect } from "react";

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('darkMode');
      return storedTheme ? JSON.parse(storedTheme) : false;
    }
    return false; // Default value if not running on the client side
  });

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode: any) => {
      const newDarkMode = !prevDarkMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      }
      return newDarkMode;
    });
  };

  // Watch for changes in darkMode and update localStorage accordingly
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
