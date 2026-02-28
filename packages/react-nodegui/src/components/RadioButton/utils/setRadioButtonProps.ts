import { setAbstractButtonProps } from "../../../utils/setAbstractButtonProps";
import { RadioButtonProps } from "../interfaces/RadioButtonProps";
import { RNRadioButton } from "../scripts/RNRadioButton";

export function setRadioButtonProps(
  widget: RNRadioButton,
  newProps: RadioButtonProps,
  oldProps: RadioButtonProps
) {
  const setter: RadioButtonProps = {
    set checked(isChecked: boolean) {
      widget.setChecked(isChecked);
    }
  };
  Object.assign(setter, newProps);
  setAbstractButtonProps(widget, newProps, oldProps);
}
