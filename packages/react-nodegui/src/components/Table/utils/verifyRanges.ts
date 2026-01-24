import { CellRange } from "../interfaces/TableProps";

export function verifyRanges(
  { row: rowCount, column: columnCount }: CellRange,
  { row, column }: Partial<CellRange>,
) {
  if (row && (row < 0 || row > rowCount - 1)) {
    console.warn(`Row "${row}" is out of range "${rowCount - 1}"`);
  }
  if (column && (column < 0 || column > columnCount - 1)) {
    console.warn(`Column "${column}" is out range "${columnCount - 1}"`);
  }
}
