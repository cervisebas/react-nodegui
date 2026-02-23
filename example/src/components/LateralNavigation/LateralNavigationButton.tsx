import { Image, StyleSheet, Text, View } from "@cervisebas/react-nodegui";
import { Brush } from "@cervisebas/react-nodegui/dist/styles/types/ColorTypes";
import { AspectRatioMode, CursorShape } from "@nodegui/nodegui";
import { useSystemTheme } from "../../hooks/useSystemTheme";
import { useMemo } from "react";
import { tintIcon } from "../../utils/tintIcon";

interface IProps {
  icon: string;
  label: string;

  expand_width: number;
  collapse_width: number;
  animation_duration: number;

  background_color: Brush;
  background_color_active: Brush;

  expanded?: boolean;
  active?: boolean;

  onClick?(): void;
}

const BUTTON_HEIGHT = 36;
const ICON_SIZE = Math.round(BUTTON_HEIGHT * 0.75);

export function LateralNavigationButton(props: IProps) {
  const { theme } = useSystemTheme();
  const WIDTH_CONTENT = props.expanded ? props.expand_width : props.collapse_width;

  const icon = useMemo(() => tintIcon(props.icon, theme.menuIcons), [props.icon, theme.menuIcons]);

  return (
    <View
      cursor={CursorShape.PointingHandCursor}
      style={[
        styles.content,
        {
          width: WIDTH_CONTENT,
          backgroundColor: props.active
            ? props.background_color_active
            : props.background_color,
        },
      ]}
      on={{
        MouseButtonRelease() {
          props.onClick?.();
        },
      }}
    >
      <View
        style={[
          styles.iconContent,
          {
            width: props.collapse_width,
          },
        ]}
      >
        <Image
          pixmap={icon}
          aspectRatioMode={AspectRatioMode.KeepAspectRatio}
          style={styles.icon}
        />
      </View>
      <Text style={[styles.text, { color: theme.text }]}>
        {props.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: BUTTON_HEIGHT,
    maxHeight: BUTTON_HEIGHT,

    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 6,
  },
  iconContent: {
    height: BUTTON_HEIGHT,
    maxHeight: BUTTON_HEIGHT,

    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
  text: {
    color: '#000000',
    marginLeft: 4,
    fontSize: 14,
  },
});
