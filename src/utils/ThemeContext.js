import React, { createContext, useState, useContext } from 'react';

const lightTheme = {
  background: '#f4fbf6',
  text: '#000',
  subtext: '#666',
  card: 'white',
  button: '#2e7d32',
  buttonText: 'white',
};

const darkTheme = {
  background: '#121212',
  text: '#fff',
  subtext: '#aaa',
  card: '#1e1e1e',
  button: '#4caf50',
  buttonText: 'black',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
