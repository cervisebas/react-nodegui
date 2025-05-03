import { QProgressDialog } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { ProgressDialogProps } from "../interfaces/ProgressDialogProps";
import { setProgressDialogProps } from "../utils/setProgressDialogProps";

export class RNProgressDialog extends QProgressDialog implements RNWidget {
  static tagName = "progress-dialog";
  
  setProps(newProps: ProgressDialogProps, oldProps: ProgressDialogProps) {
    setProgressDialogProps(this, newProps, oldProps);
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
