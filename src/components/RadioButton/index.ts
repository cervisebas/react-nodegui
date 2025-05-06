import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { RadioButtonProps } from "./interfaces/RadioButtonProps";
import { RadioButtonRef, RNRadioButton } from "./scripts/RNRadioButton";

class RadioButtonConfig extends ComponentConfig<RadioButtonProps, RNRadioButton> {
  tagName = RNRadioButton.tagName;
  
  shouldSetTextContent() {
    return true;
  }

  createInstance(newProps: RadioButtonProps) {
    const widget = new RNRadioButton();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNRadioButton, newProps: RadioButtonProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNRadioButton, _updatePayload: never, oldProps: RadioButtonProps, newProps: RadioButtonProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const RadioButton = registerComponent<RadioButtonProps>(
  new RadioButtonConfig(),
);

export { RNRadioButton, RadioButtonRef };
