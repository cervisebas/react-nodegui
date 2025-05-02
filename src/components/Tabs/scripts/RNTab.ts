import { QTabWidget, QIcon, QWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { TabProps } from "../interfaces/TabProps";
import { setTabProps } from "../utils/setTabProps";
import { RNTabItem } from "../../TabItem/scripts/RNTabItem";
import { setTabItemProps } from "../../TabItem/utils/setTabItemProps";

export class RNTab extends QTabWidget implements RNComponent {
  static tagName = "tabwidget";
  
  setProps(newProps: TabProps, oldProps: TabProps) {
    setTabProps(this, newProps, oldProps);
  }

  appendInitialChild(tabItem: RNTabItem) {
    if (!(tabItem instanceof RNTabItem)) {
      throw new Error("Children of tab should be of type TabItem");
    }

    if (tabItem.actualTabWidget) {
      this.addTab(tabItem.actualTabWidget, new QIcon(), "");
      tabItem.parentTab = this;
      setTabItemProps(tabItem, this, tabItem.initialProps, {});
    }
  }

  appendChild(child: RNTabItem) {
    this.appendInitialChild(child);
  }

  insertBefore(child: RNTabItem, beforeChild: RNTabItem) {
    if (!(child instanceof RNTabItem)) {
      throw new Error("Children of tab should be of type TabItem");
    }
    const index = this.indexOf(beforeChild.actualTabWidget as QWidget<never>);
    this.insertTab(index, child.actualTabWidget as QWidget<never>, new QIcon(), "");
    child.parentTab = this;
    setTabItemProps(child, this, child.initialProps, {});
  }

  removeChild(child: RNTabItem) {
    const childIndex = this.indexOf(child.actualTabWidget as QWidget<never>);
    this.removeTab(childIndex);
  }
}
