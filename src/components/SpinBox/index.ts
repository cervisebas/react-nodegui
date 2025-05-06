import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { SpinBoxProps } from "./interfaces/SpinBoxProps";
import { RNSpinBox, SpinBoxRef } from "./scripts/RNSpinBox";

class SpinBoxConfig extends ComponentConfig<SpinBoxProps, RNSpinBox> {
  tagName = RNSpinBox.tagName;
  
  shouldSetTextContent() {
    return true;
  }
  
  createInstance(newProps: SpinBoxProps) {
    const widget = new RNSpinBox();
    widget.setProps(newProps, {});
    return widget;
  }
  
  finalizeInitialChildren() {
    return true;
  }
  
  commitMount(instance: RNSpinBox, newProps: SpinBoxProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNSpinBox, _updatePayload: never, oldProps: SpinBoxProps, newProps: SpinBoxProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const SpinBox = registerComponent<SpinBoxProps>(new SpinBoxConfig());
export { RNSpinBox, SpinBoxRef };
