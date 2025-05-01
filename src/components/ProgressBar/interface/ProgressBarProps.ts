import { QProgressBarSignals, Orientation } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface ProgressBarProps extends ViewProps<QProgressBarSignals> {
  value?: number;
  minimum?: number;
  maximum?: number;
  orientation?: Orientation;
}