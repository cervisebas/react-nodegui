import { NativeElement, QStackedLayout, QWidget, StackingMode } from "@nodegui/nodegui";
import { setStackedLayoutProps } from "../utils/setStackedLayoutProps";
import { StackedLayoutProps } from "../interfaces/StackedLayoutProps";
import { RNWidget } from "../../../classes/RNWidget";
import { RNStackedItem } from "../../StackedItem";

export type StackedLayoutNative = NativeElement & QWidget;

export class RNStackedLayout extends QWidget implements RNWidget {
  native!: StackedLayoutNative;
  static tagName = "stacked-layout";
  private _layout: QStackedLayout | null = null;

  private stackList: Record<string, QWidget<never>> = {};
  
  layout() {
    return this._layout;
  }
  
  setLayout(layout: QStackedLayout) {
    this._layout = layout;
    super.setLayout(layout);
  }

  removeStackItem(child: QWidget<never>) {
    const key = Object.entries(this.stackList).find(([, value]) => value === child)?.[0];

    if (key) {
      delete this.stackList[key];
    }
  }

  setProps(newProps: StackedLayoutProps, oldProps: StackedLayoutProps) {
    setStackedLayoutProps(this, newProps, oldProps);
  }

  appendInitialChild(child: RNStackedItem) {
    this.appendChild(child);
  }

  appendChild(child: RNStackedItem) {
    if (!this.layout()) {
      const stackedLayout = new QStackedLayout();
      stackedLayout.setStackingMode(StackingMode.StackOne);
      this.setLayout(stackedLayout);
    }

    if (!(child instanceof RNStackedItem)) {
      console.warn("StackedLayout only supports StackedItem as its children");
      return;
    }

    this.layout()?.addWidget(child);
    this.stackList[child.name!] = child;
  }

  insertBefore(child: RNStackedItem) {
    this.appendChild(child);
  }

  removeChild(child: QWidget<never>) {
    this.layout()?.removeWidget(child);
    this.removeChild(child);
  }

  goToIndex(page: number) {
    this.layout()?.setCurrentIndex(page);
  }

  goToPage(name: string) {
    const widget = this.stackList[name];

    if (!widget) {
      console.warn(`The "${name}" screen is not registered.`);
      return;
    }

    this.layout()?.setCurrentWidget(widget);
  }

}