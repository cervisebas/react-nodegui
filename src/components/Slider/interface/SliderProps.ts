import { Orientation, QSliderSignals, TickPosition } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface SliderProps extends ViewProps<QSliderSignals> {
  tickInterval?: number;
  tickPosition?: TickPosition;
  orientation?: Orientation;
  minimum?: number;
  maximum?: number;
  invertedAppearance?: boolean;
  invertedControls?: boolean;
  pageStep?: number;
  singleStep?: number;
  isSliderDown?: boolean;
  sliderPosition?: number;
  hasTracking?: boolean;
  value?: number;
}
