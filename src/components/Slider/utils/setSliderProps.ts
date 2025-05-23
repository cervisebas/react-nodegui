import { Orientation, TickPosition } from "@nodegui/nodegui";
import { setViewProps } from "../../View/utils/setViewProps";
import { SliderProps } from "../interface/SliderProps";
import { RNSlider } from "../scripts/RNSlider";

export const setSliderProps = (
  widget: RNSlider,
  newProps: SliderProps,
  oldProps: SliderProps,
) => {
  const setter: SliderProps = {
    set tickInterval(tickInterval: number) {
      widget.setTickInterval(tickInterval);
    },
    set tickPosition(tickPosition: TickPosition) {
      widget.setTickPosition(tickPosition);
    },
    set invertedAppearance(inverted: boolean) {
      widget.setInvertedAppearance(inverted);
    },
    set invertedControls(inverted: boolean) {
      widget.setInvertedControls(inverted);
    },
    set maximum(maximum: number) {
      widget.setMaximum(maximum);
    },
    set minimum(minimum: number) {
      widget.setMinimum(minimum);
    },
    set orientation(orientation: Orientation) {
      widget.setOrientation(orientation);
    },
    set pageStep(step: number) {
      widget.setPageStep(step);
    },
    set singleStep(step: number) {
      widget.setSingleStep(step);
    },
    set isSliderDown(down: boolean) {
      widget.setSliderDown(down);
    },
    set sliderPosition(position: number) {
      widget.setSliderPosition(position);
    },
    set hasTracking(enable: boolean) {
      widget.setTracking(enable);
    },
    set value(value: number) {
      widget.setValue(value);
    },
  };
  
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};