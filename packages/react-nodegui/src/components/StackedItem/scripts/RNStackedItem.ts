import { QWidget, QLayout, QObjectSignals, QDialog, FlexLayout, QBoxLayout, QSizePolicyPolicy } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { ViewNative } from "../../View/scripts/RNView";
import { setViewProps } from "../../View/utils/setViewProps";
import { StackedItemProps } from "../interfaces/StackedItemProps";

export class RNStackedItem extends QWidget implements RNWidget {
  name?: string;
  native!: ViewNative;
  static tagName = "stacked-item";
  private _layout: QLayout<QObjectSignals> | null = null;

  layout() {
    return this._layout;
  }
  
  setLayout(layout: QLayout<QObjectSignals>) {
    this._layout = layout;
    super.setLayout(layout);
  }
  
  setProps(newProps: StackedItemProps, oldProps: StackedItemProps) {
    this.name = newProps.name;
    setViewProps(this, newProps, oldProps);
  }
  
  insertBefore(child: QWidget<never>, beforeChild: QWidget<never>): void {
    if (!this.layout() || child instanceof QDialog) {
      if (!this.layout()) {
        console.warn("parent has no layout to insert child before another child");
      }
      return;
    }
    (this.layout() as FlexLayout).insertChildBefore(child, beforeChild);
  }
  
  appendInitialChild(child: QWidget<never>): void {
    this.appendChild(child);
  }
  
  appendChild(child: QWidget<never>): void {
    if (!child || child instanceof QDialog) {
      return;
    }
    if (!this.layout()) {
      const pageRootLayout = new QBoxLayout(0);
      pageRootLayout.setContentsMargins(0, 0, 0, 0);

      this.setLayout(pageRootLayout);
      this.setSizePolicy(QSizePolicyPolicy.Expanding, QSizePolicyPolicy.Expanding);
    }
    this.layout()?.addWidget(child);
  }
  
  removeChild(child: QWidget<never>) {
    if (!this.layout()) {
      console.warn("parent has no layout to remove child from");
      return;
    }
    this.layout()?.removeWidget(child);
    child.close();
  }
}
