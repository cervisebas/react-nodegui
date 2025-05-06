import { NativeElement, QProgressDialog } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { ProgressDialogProps } from "../interfaces/ProgressDialogProps";
import { setProgressDialogProps } from "../utils/setProgressDialogProps";

export type ProgressDialogNative = NativeElement & QProgressDialog;

export class RNProgressDialog extends QProgressDialog implements RNWidget {
  native!: ProgressDialogNative;
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
