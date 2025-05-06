import { NativeElement, QInputDialog } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { InputDialogProps } from "../interfaces/InputDialogProps";
import { setInputDialogProps } from "../utils/setInputDialogProps";

export type InputDialogNative = NativeElement & QInputDialog;

export class RNInputDialog extends QInputDialog implements RNWidget {
  native!: InputDialogNative;
  static tagName = "input-dialog";
  
  setProps(newProps: InputDialogProps, oldProps: InputDialogProps) {
    setInputDialogProps(this, newProps, oldProps);
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
