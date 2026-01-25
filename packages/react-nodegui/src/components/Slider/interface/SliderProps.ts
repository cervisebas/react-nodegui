import { Orientation, QSliderSignals, TickPosition } from "@nodegui/nodegui";
import { ViewBaseProps, ViewStyles } from "../../../interfaces/ViewBaseProps";
import { RNSlider } from "../scripts/RNSlider";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export type SliderStyles =  
  & ViewStyles
  & Partial<Pick<
    StyleProperties,
    | 'minWidth'
    | 'minHeight'
    | 'width'
    | 'height'
  >>;

export interface SliderProps extends ViewBaseProps<QSliderSignals, SliderStyles> {
  ref?: React.Ref<RNSlider | null>;
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
