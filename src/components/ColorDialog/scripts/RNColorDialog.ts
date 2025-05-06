import { NativeElement, QColorDialog } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { ColorDialogProps } from "../interfaces/ColorDialogProps";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { setColorDialogProps } from "../utils/setColorDialogProps";

export type ColorDialogRef = NativeElement & QColorDialog;

export class RNColorDialog extends QColorDialog implements RNWidget {
  native!: ColorDialogRef;
  static tagName = "color-dialog";

  setProps(newProps: ColorDialogProps, oldProps: ColorDialogProps) {
    setColorDialogProps(this, newProps, oldProps);
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
