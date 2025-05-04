import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { TextProps } from "./interfaces/TextProps";
import { RNText } from "./scripts/RNText";

class TextConfig extends ComponentConfig<TextProps, RNText> {
  tagName = RNText.tagName;

  shouldSetTextContent() {
    return true;
  }

  createInstance(newProps: TextProps) {
    const widget = new RNText();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNText, newProps: TextProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  finalizeInitialChildren() {
    return true;
  }

  commitUpdate(instance: RNText, updatePayload: never, oldProps: TextProps, newProps: TextProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Text = registerComponent<TextProps>(new TextConfig());
export { RNText };
