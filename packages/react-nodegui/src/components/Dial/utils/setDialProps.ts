import { setViewProps } from "../../View/utils/setViewProps";
import { DialProps } from "../interfaces/DialProps";
import { RNDial } from "../scripts/RNDial";

export function setDialProps(
  widget: RNDial,
  newProps: DialProps,
  oldProps: DialProps
) {
  const setter: DialProps = {
    set notchesVisible(notchesVisible: boolean) {
      widget.setNotchesVisible(notchesVisible);
    },
    set wrapping(wrapping: boolean) {
      widget.setWrapping(wrapping);
    },
    set notchTarget(notchTarget: number) {
      widget.setNotchTarget(notchTarget);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
