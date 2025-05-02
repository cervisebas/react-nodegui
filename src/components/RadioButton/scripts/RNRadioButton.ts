import { QRadioButton } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { RadioButtonProps } from "../interfaces/RadioButtonProps";
import { setRadioButtonProps } from "../utils/setRadioButtonProps";

export class RNRadioButton extends QRadioButton implements RNWidget {
  static tagName = "radiobutton";

  setProps(newProps: RadioButtonProps, oldProps: RadioButtonProps): void {
    setRadioButtonProps(this, newProps, oldProps);
  }

  appendInitialChild() {
    throwUnsupported(this);
  }

  appendChild() {
    throwUnsupported(this);
  }

  insertBefore() {
    throwUnsupported(this);
  }

  removeChild() {
    throwUnsupported(this);
  }
}
