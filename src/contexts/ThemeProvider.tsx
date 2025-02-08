import { darkTheme, lightTheme, purpleTheme } from "@/theme/colors";
import React, { ReactNode, useState } from "react";

type Theme = "light" | "dark" | "purple";

interface ContextTheme {
  theme: any;
  toggleTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ContextTheme | undefined>(undefined);

export const ThemeProvider: React.FC<any> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState<any>(lightTheme); // default theme
  const toggleTheme = (theme: Theme) => {
    switch (theme) {
      case "light":
        setTheme(lightTheme);
        break;
      case "dark":
        setTheme(darkTheme);
        break;
      case "purple":
        setTheme(purpleTheme);
        break;
      default:
        setTheme(lightTheme);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = (): ContextTheme => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
