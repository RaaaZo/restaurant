import React, { createContext, useState } from "react";

export const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleMode = () => setDarkMode(!darkMode);

  return (
    <ModeContext.Provider value={{ darkMode, handleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
