import { QDialog, QWidget, FlexLayout, NativeElement } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { DialogProps } from "../interfaces/DialogProps";
import { setDialogProps } from "../utils/setDialogProps";
import { CheckMountableComponent } from "../../../decorators/CheckMountableComponent";

export type DialogNative = NativeElement & QDialog;

export class RNDialog extends QDialog implements RNWidget {
  public static tagName = "dialog";
  public native!: DialogNative;
  public mountable? = false;
  
  setProps(newProps: DialogProps, oldProps: DialogProps) {
    setDialogProps(this, newProps, oldProps);
  }
  
  @CheckMountableComponent()
  appendInitialChild(child: QWidget<never>) {
    this.appendChild(child);
  }
  
  @CheckMountableComponent()
  appendChild(child: QWidget<never>) {
    if (!child || child instanceof QDialog) {
      return;
    }
    if (!this.layout()) {
      const flexLayout = new FlexLayout();
      flexLayout.setFlexNode(this.getFlexNode());
      this.setLayout(flexLayout);
    }
    this.layout()!.addWidget(child);
  }
  
  @CheckMountableComponent()
  insertBefore(child: QWidget<never>) {
    if (child! instanceof QDialog) {
      this.appendChild(child);
    }
  }
  
  removeChild(child: QWidget<never>) {
    if (!this.layout()) {
      console.warn("parent has no layout to remove child from");
      return;
    }
    this.layout()!.removeWidget(child);
    child.close();
  }
}
