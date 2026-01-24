import { ReactElement } from "react";
import { GridColumnProps } from "../../GridColumn/interfaces/GridColumnProps";

export type GridRowProps = {
  children:
    | Array<ReactElement<GridColumnProps>>
    | ReactElement<GridColumnProps>;

  /**
   * The number of vertical units to occupy
   */
  height?: number;
};
