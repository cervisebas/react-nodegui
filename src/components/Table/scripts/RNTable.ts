import { QTableWidget, QWidget, FlexLayout } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { CustomTableProps } from "../types/CustomTableProps";
import { setTableProps } from "../utils/setTableProps";
import { verifyRanges } from "../utils/verifyRanges";
import { RNTableItem } from "../../TableItem/scripts/RNTableItem";

export class RNTable extends QTableWidget implements RNComponent {
  static tagName = "table";
  
  setProps(newProps: CustomTableProps, oldProps: CustomTableProps) {
    setTableProps(this, newProps, oldProps);
  }
  
  removeChild(child: QWidget<never>) {
    child.close();
  }
  
  appendInitialChild(child: RNTableItem) {
    const { cellPosition } = child;
    if (!this.layout()) {
      this.setLayout(new FlexLayout());
    }
    const row = this.rowCount();
    const column = this.columnCount();
    verifyRanges({ row, column }, { row: cellPosition[0], column: cellPosition[1] });
    this.setItem(cellPosition[0], cellPosition[1], child);
  }
  
  appendChild(child: RNTableItem) {
    this.appendInitialChild(child);
  }
  
  insertBefore(child: RNTableItem) {
    this.appendInitialChild(child);
  }
}
