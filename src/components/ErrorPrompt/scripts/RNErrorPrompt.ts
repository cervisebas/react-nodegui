import { QErrorMessage } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { ErrorPromptProps } from "../interfaces/ErrorPromptProps";
import { setErrorPromptProps } from "../utils/setErrorPromptProps";

export class RNErrorPrompt extends QErrorMessage implements RNWidget {
  static tagName = "error-prompt";
  
  setProps(newProps: ErrorPromptProps, oldProps: ErrorPromptProps) {
    setErrorPromptProps(this, newProps, oldProps);
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
