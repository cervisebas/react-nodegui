import { setViewProps } from "../../View/utils/setViewProps";
import { GridViewProps, GridViewColumnProps, GridViewRowProps } from "../interfaces/GridViewProps";
import { RNGridView } from "../scripts/RNGridView";

export const setGridViewProps = (
  widget: RNGridView,
  newProps: Omit<GridViewProps, "children">,
  oldProps: Omit<GridViewProps, "children">
) => {
  const setter: Omit<GridViewProps, "children"> = {
    set horizontalSpacing(spacing: number) {
      widget.layout()?.setHorizontalSpacing(spacing);
    },
    set verticalSpacing(spacing: number) {
      widget.layout()?.setVerticalSpacing(spacing);
    },
    set columnProps(props: GridViewColumnProps) {
      for (const indexString of Object.keys(props)) {
        const index = parseInt(indexString, 10);
        const { stretch, minWidth } = props[index];

        widget.layout()?.setColumnStretch(index, stretch ?? 0);
        widget.layout()?.setColumnMinimumWidth(index, minWidth ?? 0);
      }
    },
    set rowProps(props: GridViewRowProps) {
      for (const indexString of Object.keys(props)) {
        const index = parseInt(indexString, 10);
        const { stretch, minHeight } = props[index];

        widget.layout()?.setRowStretch(index, stretch ?? 0);
        widget.layout()?.setRowMinimumHeight(index, minHeight ?? 0);
      }
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};