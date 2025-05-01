import { QGridLayoutSignals } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";
import { ReactElement } from "react";
import { GridRowProps } from "../../GridRow/interfaces/GridRowProps";

export interface GridViewColumnProps {
  [ColumnIndex: number]: {
    stretch?: number;
    minWidth?: number;
  };
};

export interface GridViewRowProps {
  [RowIndex: number]: {
    stretch?: number;
    minHeight?: number;
  };
};

export interface GridViewProps extends ViewProps<QGridLayoutSignals> {
  children:
    | Array<ReactElement<GridRowProps>>
    | ReactElement<GridRowProps>;

  columnProps?: GridViewColumnProps;
  rowProps?: GridViewRowProps;

  horizontalSpacing?: number;
  verticalSpacing?: number;
}