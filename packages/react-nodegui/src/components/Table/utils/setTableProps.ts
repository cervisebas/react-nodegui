import { setViewProps } from "../../View/utils/setViewProps";
import { CellRange, CellWidget, ColumnSize, HorizontalHeader, RowSize, Sort, VerticalHeader } from "../interfaces/TableProps";
import { RNTable } from "../scripts/RNTable";
import { CustomTableProps } from "../types/CustomTableProps";
import { verifyRanges } from "./verifyRanges";

export function setTableProps(
  widget: RNTable,
  newProps: CustomTableProps,
  oldProps: CustomTableProps,
) {
  const cellRange: CellRange = {
    row: widget.rowCount(),
    column: widget.columnCount(),
  };

  const setter: CustomTableProps = {
    set horizontalHeaderItems(items: HorizontalHeader[]) {
      for (const item of items) {
        widget.setHorizontalHeaderItem(item.column, item.item);
      }
    },
    set horizontalHeaderLabels(labels: string[]) {
      widget.setHorizontalHeaderLabels(labels);
    },
    set verticalHeaderItems(items: VerticalHeader[]) {
      for (const { row, item } of items) {
        verifyRanges(cellRange, { row });
        widget.setVerticalHeaderItem(row, item);
      }
    },
    set verticalHeaderLabels(labels: string[]) {
      widget.setVerticalHeaderLabels(labels);
    },
    set cellWidgets(cellWidgets: CellWidget[]) {
      for (const { column, row, widget: cellWidget } of cellWidgets) {
        verifyRanges(cellRange, { row, column });
        widget.setCellWidget(row, column, cellWidget);
      }
    },
    set currentCell({ row, column }: CellRange) {
      verifyRanges(cellRange, { row, column });
      widget.setCurrentCell(row, column);
    },
    set sortItems({ column, order }: Sort) {
      verifyRanges(cellRange, { column });
      widget.sortItems(column, order);
    },
    set selectedColumn(column: number) {
      verifyRanges(cellRange, { column });
      widget.selectColumn(column);
    },
    set selectedRow(row: number) {
      widget.selectRow(row);
    },
    set showGrid(showGrid: boolean) {
      widget.setShowGrid(showGrid);
    },
    set columnWidth(sizes: ColumnSize[]) {
      for (const { column, width } of sizes) {
        verifyRanges(cellRange, { column });
        widget.setColumnWidth(column, width);
      }
    },
    set rowHeight(sizes: RowSize[]) {
      for (const { row, width } of sizes) {
        verifyRanges(cellRange, { row });
        widget.setRowHeight(row, width);
      }
    },
    set sortingEnabled(sortingEnabled: boolean) {
      widget.setSortingEnabled(sortingEnabled);
    },
    set hideColumns(columns: number[]) {
      for (const column of columns) {
        verifyRanges(cellRange, { column });
        widget.hideColumn(column);
      }
    },
    set hideRows(rows: number[]) {
      for (const row of rows) {
        verifyRanges(cellRange, { row });
        widget.hideRow(row);
      }
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
