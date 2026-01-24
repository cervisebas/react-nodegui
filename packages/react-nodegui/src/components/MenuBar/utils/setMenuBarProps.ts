import { setViewProps } from "../../View/utils/setViewProps";
import { MenuBarProps } from "../interfaces/MenuBarProps";
import { RNMenuBar } from "../scripts/RNMenuBar";

export function setMenuBarProps(
  widget: RNMenuBar,
  newProps: MenuBarProps,
  oldProps: MenuBarProps,
) {
  const setter: MenuBarProps = {
    set nativeMenuBar(shouldBeNative: boolean) {
      widget.setNativeMenuBar(shouldBeNative);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};