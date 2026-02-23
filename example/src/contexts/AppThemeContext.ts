import { createContext } from "react";
import { LightTheme } from "../theme/LightTheme";

export const AppThemeContext = createContext({
  isDark: false,
  theme: LightTheme,
});
