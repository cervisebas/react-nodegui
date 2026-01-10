import { RNGridRow } from "../../GridRow/scripts/RNGridRow";
import { GridColumnProps } from "../interfaces/GridColumnProps";
import { RNGridColumn } from "../scripts/RNGridColumn";

export const setGridColumnProps = (
  widget: RNGridColumn,
  parentRow: RNGridRow,
  newProps: GridColumnProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _oldProps: GridColumnProps,
) => {
  if (widget.actualWidget) {
    // TODO: Optimize this
    parentRow.parentGrid?.layout()?.removeWidget(widget.actualWidget);
    parentRow.parentGrid?.layout()?.addWidget(
      widget.actualWidget,
      parentRow.rowIndex ?? 0,
      widget.columnIndex ?? 0,
      parentRow.height ?? 1,
      widget.width ?? 1,
    );
  }

  const setter: GridColumnProps = {
    set width(width: number) {
      widget.width = width;
    },
  };
  Object.assign(setter, newProps);
};