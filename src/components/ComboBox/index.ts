import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { ComboBoxProps } from "./interfaces/ComboBoxProps";
import { RNComboBox } from "./scripts/RNComboBox";

class ComboBoxConfig extends ComponentConfig<ComboBoxProps, RNComboBox> {
  tagName = RNComboBox.tagName;
  shouldSetTextContent() {
    return true;
  }
  createInstance(newProps: ComboBoxProps) {
    const widget = new RNComboBox();
    widget.setProps(newProps, {});
    return widget;
  }
  finalizeInitialChildren() {
    return true;
  }
  commitMount(instance: RNComboBox, newProps: ComboBoxProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNComboBox, _updatePayload: never, oldProps: ComboBoxProps, newProps: ComboBoxProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const ComboBox = registerComponent<ComboBoxProps>(new ComboBoxConfig());
