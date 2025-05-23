import { NativeElement, QFontDialog } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { FontDialogProps } from "../interfaces/FontDialogProps";
import { setFontDialogProps } from "../utils/setFontDialogProps";
import { throwUnsupported } from "../../../utils/throwUnsupported";

export type FontDialogNative = NativeElement & QFontDialog;

export class RNFontDialog extends QFontDialog implements RNWidget {
  native!: FontDialogNative;
  static tagName = "font-dialog";
  
  setProps(newProps: FontDialogProps, oldProps: FontDialogProps) {
    setFontDialogProps(this, newProps, oldProps);
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
