import { QDialog, QWidget, FlexLayout } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { DialogProps } from "../interfaces/DialogProps";
import { setDialogProps } from "../utils/setDialogProps";

export class RNDialog extends QDialog implements RNWidget {
  static tagName = "dialog";
  
  setProps(newProps: DialogProps, oldProps: DialogProps) {
    setDialogProps(this, newProps, oldProps);
  }
  
  appendInitialChild(child: QWidget<never>) {
    this.appendChild(child);
  }
  
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
