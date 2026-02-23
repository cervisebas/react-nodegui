import { useContext } from "react";
import { AppThemeContext } from "../contexts/AppThemeContext";

export function useSystemTheme() {
  return useContext(AppThemeContext);
}