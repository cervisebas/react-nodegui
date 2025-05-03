import { QTableWidgetItem, QWidget, SortOrder, QTableWidgetSignals } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface CellRange {
  row: number;
  column: number;
}
export interface HorizontalHeader extends Omit<CellRange, "row"> {
  item: QTableWidgetItem;
}
export interface VerticalHeader extends Omit<CellRange, "column"> {
  item: QTableWidgetItem;
}

export interface CellWidget extends CellRange {
  widget: QWidget<never>;
}

export interface Sort extends Omit<CellRange, "row"> {
  order?: SortOrder;
}

export interface ColumnSize extends Omit<CellRange, "row"> {
  width: number;
}

export interface RowSize extends Omit<CellRange, "column"> {
  width: number;
}

export interface TableProps extends ViewProps<QTableWidgetSignals> {
  cellRange: CellRange;
  horizontalHeaderItems?: HorizontalHeader[];
  horizontalHeaderLabels?: string[];
  verticalHeaderItems?: VerticalHeader[];
  verticalHeaderLabels?: string[];
  cellWidgets?: CellWidget[];
  currentCell?: CellRange;
  sortItems?: Sort;
  selectedColumn?: number;
  selectedRow?: number;
  showGrid?: boolean;
  columnWidth?: ColumnSize[];
  rowHeight?: RowSize[];
  sortingEnabled?: boolean;
  hideColumns?: number[];
  hideRows?: number[];
}
