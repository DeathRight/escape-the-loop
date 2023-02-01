// Create AppContext and it's provider with the current theme and proper typing

import React from "react";
import { useToggle } from "../../hooks/useToggle";

/* ------------------------------- AppContext ------------------------------- */
interface AppContextType {
  darkMode: boolean;
}

const AppContext = React.createContext<AppContextType>({
  darkMode: false,
});

/* --------------------------- AppContextProvider --------------------------- */
interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider = (props: AppContextProviderProps) => {
  const { children } = props;
  const [darkMode, toggleDarkMode] = useToggle(false);

  return (
    <AppContext.Provider value={{ darkMode }}>{children}</AppContext.Provider>
  );
};

/* ------------------------------ useAppContext ----------------------------- */
const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

/* --------------------------------- Exports -------------------------------- */
export { AppContext, AppContextProvider, useAppContext };
