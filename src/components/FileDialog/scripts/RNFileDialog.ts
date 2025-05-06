import { NativeElement, QFileDialog } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { FileDialogProps } from "../interfaces/FileDialogLabelText";
import { setFileDialogProps } from "../utils/setFileDialogProps";

export type FileDialogNative = NativeElement & QFileDialog;

export class RNFileDialog extends QFileDialog implements RNWidget {
  native!: FileDialogNative;
  static tagName = "file-dialog";

  setProps(newProps: FileDialogProps, oldProps: FileDialogProps): void {
    setFileDialogProps(this, newProps, oldProps);
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
