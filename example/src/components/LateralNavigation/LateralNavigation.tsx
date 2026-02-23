import { useMemo, useRef, useState } from "react";
import { LateralNavigationButton } from "./LateralNavigationButton";
import { LateralNavigationContent, LateralNavigationContentRef } from "./LateralNavigationContent";
import { StyleSheet, View } from "@cervisebas/react-nodegui";
import { Route } from "../../interfaces/Route";
import React from "react";
import { refStackNavigation } from "../../utils/refs";
import { useSystemTheme } from "../../hooks/useSystemTheme";
import color from "color";
import { Brush } from "@cervisebas/react-nodegui/dist/styles/types/ColorTypes";

const EXPAND_WIDTH = 280;
const COLLAPSE_WIDTH = 60;
const ANIMATION_DURATION = 100;

const PADDING_VERTICAL_CONTENT = 12;
const PADDING_HORIZONTAL_CONTENT = 6;

const BUTTON_EXPAND_WIDTH = 280 - PADDING_HORIZONTAL_CONTENT * 2;
const BUTTON_COLLAPSE_WIDTH = 60 - PADDING_HORIZONTAL_CONTENT * 2;

interface IProps {
  routes: Route[];
  activeScreen: string;
}

export function LateralNavigation(props: IProps) {
  const { theme, isDark } = useSystemTheme();
  const buttonBackground = useMemo(() => {
    const backgroundMenu = color(theme.menuBackground);
    
    const active = isDark
      ? backgroundMenu.lighten(2).hex()
      : backgroundMenu.darken(0.3).hex();

    const _background = isDark
      ? backgroundMenu.lighten(0.2).hex()
      : backgroundMenu.darken(0.1).hex();

    return {
      active: active as Brush,
      background: _background as Brush,
    };
  }, [isDark, theme.menuBackground]);

  const [expanded, setExpanded] = useState(false);
  const refLateralNavigationContent = useRef<LateralNavigationContentRef>(null);

  return (
    <LateralNavigationContent
      ref={refLateralNavigationContent}
      expand_width={EXPAND_WIDTH}
      collapse_width={COLLAPSE_WIDTH}
      animation_duration={ANIMATION_DURATION}
      background_color={theme.menuBackground}
      setExpanded={setExpanded}
    >
      <View
        style={[
          styles.content,
          {
            width: expanded
              ? EXPAND_WIDTH
              : COLLAPSE_WIDTH,
          },
        ]}
      >
        {props.routes.map((route) => (
          <React.Fragment key={`button-${route.route}`}>
            <LateralNavigationButton
              icon={route.icon}
              label={route.label}
              active={props.activeScreen === route.route}
              expanded={expanded}
              expand_width={BUTTON_EXPAND_WIDTH}
              collapse_width={BUTTON_COLLAPSE_WIDTH}
              animation_duration={ANIMATION_DURATION}
              background_color={buttonBackground.background}
              background_color_active={buttonBackground.active}
              onClick={() => {
                refLateralNavigationContent.current?.collapse();
                refStackNavigation.current?.navigateTo(route.route);
              }}
            />
            <View
              style={{
                height: 6,
              }}
            />
          </React.Fragment>
        ))}
      </View>
    </LateralNavigationContent>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    paddingTop: PADDING_VERTICAL_CONTENT,
    paddingLeft: PADDING_HORIZONTAL_CONTENT,
    paddingRight: PADDING_HORIZONTAL_CONTENT,
    paddingBottom: PADDING_VERTICAL_CONTENT,
  },
});
