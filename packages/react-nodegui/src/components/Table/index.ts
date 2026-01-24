import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { TableProps } from "./interfaces/TableProps";
import { RNTable } from "./scripts/RNTable";

class TableConfig extends ComponentConfig<TableProps, RNTable> {
  tagName = RNTable.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: TableProps) {
    const widget = new RNTable(newProps.cellRange.row, newProps.cellRange.column);
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNTable, newProps: TableProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNTable, _updatePayload: never, oldProps: TableProps, newProps: TableProps) {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * React implementation of nodegui's [QTableWidget](https://docs.nodegui.org/docs/api/generated/classes/qtablewidget/)
 * @property `cellRange` define the number of rows & columns to create
 * @example
 * ```javascriptreact
 * return (
 *    <Table
          cellRange={{ row: 2, column: 2 }} // 2 x 2 = 4 cells
          style="flex: 1;"
          horizontalHeaderLabels={["What", "How", "When"]}
          verticalHeaderLabels={["yes", "this", "later"]}
          hideRows={[0]} //hides 0 indexed rows
        >
          <TableItem cellPosition={[0, 0]} text="1" toolTip="Tooltip"/>
          <TableItem cellPosition={[0, 1]} text="2"/>
          <TableItem cellPosition={[1, 0]} text="3"/>
          <TableItem cellPosition={[1, 1]} text="4"/>
      </Table>
 * )
 * ```
 */

export const Table = registerComponent<TableProps>(new TableConfig());
export { RNTable };
export { TableNative } from "./scripts/RNTable";
