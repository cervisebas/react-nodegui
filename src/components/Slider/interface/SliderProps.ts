import { Orientation, QSliderSignals, TickPosition } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNSlider } from "../scripts/RNSlider";

export interface SliderProps extends ViewBaseProps<QSliderSignals> {
  ref?: React.Ref<RNSlider>;
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
