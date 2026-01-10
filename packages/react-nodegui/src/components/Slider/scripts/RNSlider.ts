import { NativeElement, QSlider } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { SliderProps } from "../interface/SliderProps";
import { setSliderProps } from "../utils/setSliderProps";
import { throwUnsupported } from "../../../utils/throwUnsupported";

export type SliderNative = NativeElement & QSlider;

export class RNSlider extends QSlider implements RNWidget {
  native!: SliderNative;
  static tagName = 'slider';

  setProps(newProps: SliderProps, oldProps: SliderProps): void {
    setSliderProps(this, newProps, oldProps);
  }

  appendInitialChild() {
    throwUnsupported(this);
  }

  appendChild() {
    throwUnsupported(this);
  }

  insertBefore() {
    throwUnsupported(this);
  }

  removeChild() {
    throwUnsupported(this);
  }
}