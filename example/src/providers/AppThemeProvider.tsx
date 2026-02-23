import { useCallback, useEffect, useState } from "react";
import { LightTheme } from "../theme/LightTheme";
import { QApplication, WidgetEventTypes } from "@nodegui/nodegui";
import { DarkTheme } from "../theme/DarkTheme";
import { AppThemeContext } from "../contexts/AppThemeContext";
import { isDarkMode } from "../utils/isDarkMode";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const app = QApplication.instance();

export const AppThemeProvider = React.memo((props: IProps) => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(LightTheme);

  const checkSystemTheme = useCallback(() => {
    const _isDark = isDarkMode();
    
    setIsDark(_isDark);
    setTheme(_isDark ? DarkTheme : LightTheme);
  }, []);

  useEffect(() => {
    checkSystemTheme();
    
    app.addEventListener(WidgetEventTypes.ApplicationPaletteChange, () => {
      checkSystemTheme();
    });

    return () => {
      app.removeEventListener(WidgetEventTypes.ApplicationPaletteChange, () => {});
    };
  }, []);

  return (
    <AppThemeContext.Provider value={{ isDark, theme }}>
      {props.children}
    </AppThemeContext.Provider>
  );
});
