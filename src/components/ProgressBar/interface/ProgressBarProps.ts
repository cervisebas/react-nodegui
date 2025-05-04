import { QProgressBarSignals, Orientation } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNProgressBar } from "../scripts/RNProgressBar";

export interface ProgressBarProps extends ViewBaseProps<QProgressBarSignals> {
  ref?: React.Ref<RNProgressBar>;
  value?: number;
  minimum?: number;
  maximum?: number;
  orientation?: Orientation;
}