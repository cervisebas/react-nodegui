import { QDial } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { DialProps } from "../interfaces/DialProps";
import { setDialProps } from "../utils/setDialProps";

export class RNDial extends QDial implements RNWidget {
  static tagName = "dial";

  setProps(newProps: DialProps, oldProps: DialProps): void {
    setDialProps(this, newProps, oldProps);
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
