import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { CheckBoxProps } from "./interfaces/CheckBoxProps";
import { RNCheckBox } from "./scripts/RNCheckBox";

class CheckBoxConfig extends ComponentConfig<CheckBoxProps, RNCheckBox> {
  tagName = RNCheckBox.tagName;
  shouldSetTextContent() {
    return true;
  }

  createInstance(newProps: CheckBoxProps) {
    const widget = new RNCheckBox();
    widget.setProps(newProps, {});
    return widget;
  }

  finalizeInitialChildren() {
    return true;
  }

  commitMount(instance: RNCheckBox, newProps: CheckBoxProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNCheckBox, _updatePayload: never, oldProps: CheckBoxProps, newProps: CheckBoxProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const CheckBox = registerComponent<CheckBoxProps>(new CheckBoxConfig());
