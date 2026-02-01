import { useRef, useState } from "react";
import { LateralNavigationButton } from "./LateralNavigationButton";
import { LateralNavigationContent, LateralNavigationContentRef } from "./LateralNavigationContent";
import { StyleSheet, View } from "@cervisebas/react-nodegui";
import { Route } from "../../interfaces/Route";
import React from "react";
import { refStackNavigation } from "../../utils/refs";

const EXPAND_WIDTH = 280;
const COLLAPSE_WIDTH = 60;
const ANIMATION_DURATION = 100;

const PADDING_VERTICAL_CONTENT = 12;
const PADDING_HORIZONTAL_CONTENT = 6;

const BUTTON_EXPAND_WIDTH = 280 - PADDING_HORIZONTAL_CONTENT * 2;
const BUTTON_COLLAPSE_WIDTH = 60 - PADDING_HORIZONTAL_CONTENT * 2;

const CONTENT_BACKGROUND_COLOR = '#F2F2F2';
const BUTTON_BACKGROUND_COLOR = '#E6E6E6';
const BUTTON_BACKGROUND_COLOR_ACTIVE = '#C6C6C6';

interface IProps {
  routes: Route[];
  activeScreen: string;
}

export function LateralNavigation(props: IProps) {
  const refLateralNavigationContent = useRef<LateralNavigationContentRef>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <LateralNavigationContent
      ref={refLateralNavigationContent}
      expand_width={EXPAND_WIDTH}
      collapse_width={COLLAPSE_WIDTH}
      animation_duration={ANIMATION_DURATION}
      background_color={CONTENT_BACKGROUND_COLOR}
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
              background_color={BUTTON_BACKGROUND_COLOR}
              background_color_active={BUTTON_BACKGROUND_COLOR_ACTIVE}
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
