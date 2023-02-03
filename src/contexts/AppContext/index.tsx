import React, { useEffect } from "react";
import { darkTheme, theme, ThemeProvider } from "@stitchesConfig";
import { useToggle } from "@hooks/useToggle";
import { Appearance, useColorScheme } from "react-native";

/* ------------------------------- AppContext ------------------------------- */
interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: (v?: boolean) => void;
}

const AppContext = React.createContext<AppContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

/* --------------------------- AppContextProvider --------------------------- */
interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider = (props: AppContextProviderProps) => {
  const { children } = props;
  const deviceColorScheme = useColorScheme();
  const [darkMode, toggleDarkMode] = useToggle(
    deviceColorScheme === "dark" ? true : false
  );

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      toggleDarkMode(colorScheme === "dark" ? true : false);
    });
  }, []);

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
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
