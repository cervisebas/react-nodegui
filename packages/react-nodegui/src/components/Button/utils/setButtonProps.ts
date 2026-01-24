import { setAbstractButtonProps } from "../../../utils/setAbstractButtonProps";
import { ButtonProps } from "../interfaces/ButtonProps";
import { RNButton } from "../scripts/RNButton";

export const setButtonProps = (
  widget: RNButton,
  newProps: ButtonProps,
  oldProps: ButtonProps
) => {
  const setter: ButtonProps = {
    set flat(isFlat: boolean) {
      widget.setFlat(isFlat);
    }
  };
  Object.assign(setter, newProps);
  setAbstractButtonProps(widget, newProps, oldProps);
};