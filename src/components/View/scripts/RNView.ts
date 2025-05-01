import { QWidget, QLayout, QObjectSignals, QWidgetSignals, QDialog, FlexLayout } from "@nodegui/nodegui";
import { ViewProps } from "../interface/ViewProps";
import { setViewProps } from "../utils/setViewProps";
import { RNWidget } from "../../../classes/RNWidget";

export class RNView extends QWidget implements RNWidget {
  static tagName = "view";
  private _layout: QLayout<QObjectSignals> | null = null;

  layout() {
    return this._layout;
  }
  
  setLayout(layout: QLayout<QObjectSignals>) {
    this._layout = layout;
    super.setLayout(layout);
  }
  
  setProps(newProps: ViewProps<QWidgetSignals>, oldProps: ViewProps<QWidgetSignals>) {
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
      const flexLayout = new FlexLayout();
      flexLayout.setFlexNode(this.getFlexNode());
      this.setLayout(flexLayout);
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