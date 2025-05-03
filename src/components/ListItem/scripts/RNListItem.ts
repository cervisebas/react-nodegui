import { QListWidgetItem, QWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { ListItemProps } from "../interfaces/ListItemProps";
import { setListItemProps } from "../utils/setListItemProps";

export class RNListItem extends QListWidgetItem implements RNComponent {
  static tagName: string = "listitem";
  actualListItemWidget?: QWidget<never>;

  setProps(newProps: ListItemProps, oldProps: ListItemProps) {
    setListItemProps(this, newProps, oldProps);
  }
  
  appendInitialChild(child: QWidget<never>) {
    if (this.actualListItemWidget) {
      throw new Error("ListItem can have only one child");
    }
    this.actualListItemWidget = child;
  }
  
  appendChild(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
  
  insertBefore(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
  
  removeChild(child: QWidget<never>) {
    if (child) {
      child.close();
    }
    if (this.actualListItemWidget) {
      delete this.actualListItemWidget;
    }
  }
}
