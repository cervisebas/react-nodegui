import { QCheckBox } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { CheckBoxProps } from "../interfaces/CheckBoxProps";
import { setCheckBoxProps } from "../utils/setCheckBoxProps";

export class RNCheckBox extends QCheckBox implements RNWidget {
  static tagName = "checkbox";

  setProps(newProps: CheckBoxProps, oldProps: CheckBoxProps) {
    setCheckBoxProps(this, newProps, oldProps);
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
