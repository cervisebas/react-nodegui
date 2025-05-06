import { NativeElement, QSpinBox } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { SpinBoxProps } from "../interfaces/SpinBoxProps";
import { setSpinBoxProps } from "../utils/setSpinBoxProps";

export type SpinBoxRef = NativeElement & QSpinBox;

export class RNSpinBox extends QSpinBox implements RNWidget {
  native!: SpinBoxRef;
  static tagName = "spinbox";

  setProps(newProps: SpinBoxProps, oldProps: SpinBoxProps): void {
    setSpinBoxProps(this, newProps, oldProps);
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
