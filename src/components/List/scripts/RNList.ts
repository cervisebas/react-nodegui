import { QListWidget, FlexLayout, NativeElement } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { setListProps } from "../utils/setListProps";
import { ListProps } from "../interfaces/ListProps";
import { RNListItem } from "../../ListItem/scripts/RNListItem";

export type ListNative = NativeElement & QListWidget;

export class RNList extends QListWidget implements RNComponent {
  native!: ListNative;
  static tagName = "list";

  setProps(newProps: ListProps, oldProps: ListProps) {
    setListProps(this, newProps, oldProps);
  }

  removeChild(child: RNListItem) {
    const row = this.row(child);
    this.takeItem(row);
  }

  appendInitialChild(child: RNListItem) {
    this.appendChild(child);
  }

  appendChild(child: RNListItem) {
    if (!this.layout()) {
      this.setLayout(new FlexLayout());
    }

    if (!(child instanceof RNListItem)) {
      throw new Error("Children of list should be of type ListItem");
    }

    this.addItem(child);
    if (child.actualListItemWidget) {
      child.setSizeHint(child.actualListItemWidget.size());
      this.setItemWidget(child, child.actualListItemWidget);
    }
  }

  insertBefore(child: RNListItem, beforeChild: RNListItem) {
    const row = this.row(beforeChild);
    this.insertItem(row, child);
  }
}
