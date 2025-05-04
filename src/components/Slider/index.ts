import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { SliderProps } from "./interface/SliderProps";
import { RNSlider } from "./scripts/RNSlider";

class SliderConfig extends ComponentConfig<SliderProps, RNSlider> {
  tagName = RNSlider.tagName;

  shouldSetTextContent() {
    return true;
  }

  createInstance(newProps: SliderProps) {
    const widget = new RNSlider();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNSlider, newProps: SliderProps): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNSlider, _updatePayload: never, oldProps: SliderProps, newProps: SliderProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Slider = registerComponent<SliderProps>(new SliderConfig());
export { RNSlider };
