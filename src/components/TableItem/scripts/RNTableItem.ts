import { QTableWidgetItem } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { TableItemProps } from "../interfaces/TableItemProps";
import { CellPosition } from "../types/CellPosition";
import { setTableItemProps } from "../utils/setTableItemProps";

export class RNTableItem extends QTableWidgetItem implements RNComponent {
  static tagName = "table-item";
  cellPosition!: CellPosition;
  
  setProps(newProps: TableItemProps, oldProps: TableItemProps): void {
    this.cellPosition = newProps.cellPosition;
    setTableItemProps(this, newProps, oldProps);
  }
  
  appendInitialChild() {
    throwUnsupported(this);
  }
  
  appendChild() {
    throwUnsupported(this);
  }
  
  insertBefore() {
    throwUnsupported(this);
  }
  
  removeChild() {
    throwUnsupported(this);
  }
}
