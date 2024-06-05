import { createContext, useContext, useEffect } from "react";
import { useLocalStorageDarkMode } from "../hook/useLocalStorageDarkMode";

const DarkModeContext = createContext();
const Local_Key = "darkMode";
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageDarkMode(
    "light",
    Local_Key
  );
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("light");
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
