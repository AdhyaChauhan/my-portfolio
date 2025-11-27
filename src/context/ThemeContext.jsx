import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the Context (The "Teleporter")
const ThemeContext = createContext();

// 2. Create the Provider (The "Broadcast Tower")
export function ThemeProvider({ children }) {
  // Check local storage so the theme persists if they reload
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // The function to flip the switch
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save their preference to the browser
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // This magic effect updates the HTML <body> tag directly
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    // We send two things to the whole app: the variable and the function
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Create a Custom Hook (The "Receiver")
// This makes it easy for components to connect.
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}