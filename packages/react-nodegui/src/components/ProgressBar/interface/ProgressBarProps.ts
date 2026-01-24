import { QProgressBarSignals, Orientation } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNProgressBar } from "../scripts/RNProgressBar";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export interface ProgressBarProps extends ViewBaseProps<QProgressBarSignals> {
  ref?: React.Ref<RNProgressBar | null>;
  value?: number;
  minimum?: number;
  maximum?: number;
  orientation?: Orientation;
  style?: 
    & ViewBaseProps<QProgressBarSignals>['style']
    & Partial<Pick<
      StyleProperties,
      'textAlign'
    >>;
}
