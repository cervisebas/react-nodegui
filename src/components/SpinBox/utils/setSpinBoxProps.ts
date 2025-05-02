import { setViewProps } from "../../View/utils/setViewProps";
import { SpinBoxProps } from "../interfaces/SpinBoxProps";
import { Range } from "../interfaces/Range";
import { RNSpinBox } from "../scripts/RNSpinBox";

export function setSpinBoxProps(
  widget: RNSpinBox,
  newProps: SpinBoxProps,
  oldProps: SpinBoxProps,
) {
  const setter: SpinBoxProps = {
    set prefix(prefix: string) {
      widget.setPrefix(prefix);
    },
    set suffix(suffix: string) {
      widget.setSuffix(suffix);
    },
    set singleStep(step: number) {
      widget.setSingleStep(step);
    },
    set range(range: Range) {
      widget.setRange(range.minimum, range.maximum);
    },
    set value(value: number) {
      widget.setValue(value);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
