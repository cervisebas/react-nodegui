import { QPlainTextEdit } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { PlainTextEditProps } from "../interfaces/PlainTextEditProps";
import { setPlainTextEditProps } from "../utils/setPlainTextEditProps";

export class RNPlainTextEdit extends QPlainTextEdit implements RNWidget {
  static tagName = "plaintextedit";

  setProps(newProps: PlainTextEditProps, oldProps: PlainTextEditProps): void {
    setPlainTextEditProps(this, newProps, oldProps);
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
