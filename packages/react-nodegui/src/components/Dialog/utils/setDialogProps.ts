import { QFont, FocusReason } from "@nodegui/nodegui";
import { setViewProps } from "../../View/utils/setViewProps";
import { DialogProps } from "../interfaces/DialogProps";
import { RNDialog } from "../scripts/RNDialog";

export function setDialogProps(widget: RNDialog, newProps: DialogProps, oldProps: DialogProps) {
  const setter: DialogProps = {
    set open(open: boolean) {
      if (open) {
        widget.open();
      } else {
        widget.close();
      }
    },
    set font(font: QFont) {
      widget.setFont(font);
    },
    set focus(focus: FocusReason) {
      widget.setFocus(focus);
    },
    set modal(modal: boolean) {
      widget.setModal(modal);
    },
    set reject(reject: boolean) {
      if (reject) {
        widget.reject();
      }
    },
    set result(result: number) {
      widget.setResult(result);
    },
    set enableSizeGrip(sizeGrip: boolean) {
      widget.setSizeGripEnabled(sizeGrip);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
