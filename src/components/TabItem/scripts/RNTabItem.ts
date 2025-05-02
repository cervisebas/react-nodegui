import { Component, QWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { TabItemProps } from "../interfaces/TabItemProps";
import { setTabItemProps } from "../utils/setTabItemProps";
import { RNTab } from "../../Tabs/scripts/RNTab";

export class RNTabItem extends Component implements RNComponent {
  static tagName: string = "tabitem";
  actualTabWidget?: QWidget<never>;
  initialProps: TabItemProps = {};
  parentTab?: RNTab;

  setProps(newProps: TabItemProps, oldProps: TabItemProps) {
    if (this.parentTab) {
      setTabItemProps(this, this.parentTab, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
  }
  
  appendInitialChild(child: QWidget<never>) {
    if (this.actualTabWidget) {
      throw new Error("Tab Item can have only one child");
    }
    this.actualTabWidget = child;
  }
  
  appendChild(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
  
  insertBefore(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
  
  removeChild(child: QWidget<never>) {
    child.close();
    delete this.actualTabWidget;
  }
}
