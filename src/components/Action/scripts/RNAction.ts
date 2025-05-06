import { NativeElement, QAction } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { ActionProps } from "../interfaces/ActionProps";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { setActionProps } from "../utils/setActionProps";

export type ActionRef = NativeElement & QAction;

export class RNAction extends QAction implements RNComponent {
  native!: ActionRef;
  static tagName = "action";

  setProps(newProps: ActionProps, oldProps: ActionProps): void {
    setActionProps(this, newProps, oldProps);
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