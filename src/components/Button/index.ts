import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { ButtonProps } from "./interfaces/ButtonProps";
import { RNButton } from "./scripts/RNButton";

class ButtonConfig extends ComponentConfig<ButtonProps, RNButton> {
  tagName = RNButton.tagName;

  shouldSetTextContent() {
    return true;
  }

  createInstance(newProps: ButtonProps) {
    const widget = new RNButton();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNButton, newProps: ButtonProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  finalizeInitialChildren() {
    return true;
  }

  commitUpdate(instance: RNButton, _updatePayload: never, oldProps: ButtonProps, newProps: ButtonProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Button = registerComponent<ButtonProps>(new ButtonConfig());
