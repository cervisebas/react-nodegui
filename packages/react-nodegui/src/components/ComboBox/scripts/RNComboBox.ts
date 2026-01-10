import { NativeElement, QComboBox } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { ComboBoxProps } from "../interfaces/ComboBoxProps";
import { setComboBoxProps } from "../utils/setComboBoxProps";

export type ComboBoxNative = NativeElement & QComboBox;

export class RNComboBox extends QComboBox implements RNWidget {
  native!: ComboBoxNative;
  static tagName = "combobox";

  setProps(newProps: ComboBoxProps, oldProps: ComboBoxProps) {
    setComboBoxProps(this, newProps, oldProps);
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
