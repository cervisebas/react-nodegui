import { QProgressBarSignals, Orientation } from "@nodegui/nodegui";
import { ViewBaseProps, ViewStyles } from "../../../interfaces/ViewBaseProps";
import { RNProgressBar } from "../scripts/RNProgressBar";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export type ProgressBarStyles =  
  & ViewStyles
  & Partial<Pick<
    StyleProperties,
    'textAlign'
  >>;

export interface ProgressBarProps extends ViewBaseProps<QProgressBarSignals, ProgressBarStyles> {
  ref?: React.Ref<RNProgressBar | null>;
  value?: number;
  minimum?: number;
  maximum?: number;
  orientation?: Orientation;
}
