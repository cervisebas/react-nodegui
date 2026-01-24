import { setAbstractButtonProps } from "../../../utils/setAbstractButtonProps";
import { CheckBoxProps } from "../interfaces/CheckBoxProps";
import { RNCheckBox } from "../scripts/RNCheckBox";

export const setCheckBoxProps = (
  widget: RNCheckBox,
  newProps: CheckBoxProps,
  oldProps: CheckBoxProps
) => {
  const setter: CheckBoxProps = {
    set checked(isChecked: boolean) {
      widget.setChecked(isChecked);
    }
  };
  Object.assign(setter, newProps);
  setAbstractButtonProps(widget, newProps, oldProps);
};
