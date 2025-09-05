import { createContext, useState, useEffect, type ReactNode } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  isDark: false,
});

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    requestAnimationFrame(() => {
      document.documentElement.className = theme;
    });
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
