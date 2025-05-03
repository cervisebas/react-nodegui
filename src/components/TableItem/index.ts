import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { TableItemProps } from "./interfaces/TableItemProps";
import { RNTableItem } from "./scripts/RNTableItem";

class TableItemConfig extends ComponentConfig<TableItemProps, RNTableItem> {
  tagName = RNTableItem.tagName;
  
  shouldSetTextContent() {
    return true;
  }
  
  createInstance(newProps: TableItemProps) {
    const widget = new RNTableItem();
    widget.setProps(newProps, { cellPosition: [0, 0] });
    return widget;
  }
  
  commitUpdate(instance: RNTableItem, _updatePayload: never, oldProps: TableItemProps, newProps: TableItemProps) {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * React implementation of nodegui's [QTableWidgetItem](https://docs.nodegui.org/docs/api/generated/classes/qtablewidgetitem)
 * 
 * Can only be used as a child of `<Table/>`
 * @property `cellPosition` valid position of the item in the Table
 */

export const TableItem = registerComponent<TableItemProps>(new TableItemConfig());
