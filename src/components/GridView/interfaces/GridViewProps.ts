import { QGridLayoutSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import React, { ReactElement } from "react";
import { GridRowProps } from "../../GridRow/interfaces/GridRowProps";
import { RNGridView } from "../scripts/RNGridView";

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

export interface GridViewProps extends ViewBaseProps<QGridLayoutSignals> {
  ref?: React.Ref<RNGridView>;

  children:
    | Array<ReactElement<GridRowProps>>
    | ReactElement<GridRowProps>;

  columnProps?: GridViewColumnProps;
  rowProps?: GridViewRowProps;

  horizontalSpacing?: number;
  verticalSpacing?: number;
}