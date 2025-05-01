import { QLabel } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { TextProps } from "../interfaces/TextProps";
import { setTextProps } from "../utils/setTextProps";
import { throwUnsupported } from "../../../utils/throwUnsupported";

export class RNText extends QLabel implements RNWidget {
  static tagName = 'text';

  setProps(newProps: TextProps, oldProps: TextProps): void {
    setTextProps(this, newProps, oldProps);
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
