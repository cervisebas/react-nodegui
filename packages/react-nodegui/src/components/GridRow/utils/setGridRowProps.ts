import { RNGridView } from "../../GridView/scripts/RNGridView";
import { GridRowProps } from "../interfaces/GridRowProps";
import { RNGridRow } from "../scripts/RNGridRow";

export const setGridRowProps = (
  widget: RNGridRow,
  _parentGrid: RNGridView,
  newProps: Omit<GridRowProps, "children">,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _oldProps: Omit<GridRowProps, "children">,
) => {
  const setter: Omit<GridRowProps, "children"> = {
    set height(height: number) {
      widget.height = height;
    },
  };
  Object.assign(setter, newProps);
};