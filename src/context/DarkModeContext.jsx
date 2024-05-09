import { createContext, useContext, useEffect } from "react";
import { useLocalStorageDarkMode } from "../hook/useLocalStorageDarkMode";

const DarkModeContext = createContext();
<<<<<<< HEAD
const Local_Key = "darkMode";
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageDarkMode("light",Local_Key);
  useEffect( 
=======

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageDarkMode();

  useEffect(
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
