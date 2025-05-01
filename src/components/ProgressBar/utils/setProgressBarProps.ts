import { Orientation } from "@nodegui/nodegui";
import { setViewProps } from "../../View/utils/setViewProps";
import { ProgressBarProps } from "../interface/ProgressBarProps";
import { RNProgressBar } from "../scripts/RNProgressBar";

export function setProgressBarProps(
  widget: RNProgressBar,
  newProps: ProgressBarProps,
  oldProps: ProgressBarProps,
) {
  const setter: ProgressBarProps = {
    set value(val: number) {
      widget.setValue(val);
    },
    set minimum(min: number) {
      widget.setMinimum(min);
    },
    set maximum(max: number) {
      widget.setMaximum(max);
    },
    set orientation(orientation: Orientation) {
      widget.setOrientation(orientation);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};