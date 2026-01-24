import { NativeElement, QLineEdit } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { LineEditProps } from "../interfaces/LineEditProps";
import { setLineEditProps } from "../utils/setLineEditProps";

export type LineEditNative = NativeElement & QLineEdit;

export class RNLineEdit extends QLineEdit implements RNWidget {
  native!: LineEditNative;
  static tagName = "linedit";

  setProps(newProps: LineEditProps, oldProps: LineEditProps): void {
    setLineEditProps(this, newProps, oldProps);
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
