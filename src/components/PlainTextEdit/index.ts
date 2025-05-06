import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { PlainTextEditProps } from "./interfaces/PlainTextEditProps";
import { RNPlainTextEdit } from "./scripts/RNPlainTextEdit";

class PlainTextEditConfig extends ComponentConfig<PlainTextEditProps, RNPlainTextEdit> {
  tagName = RNPlainTextEdit.tagName;

  shouldSetTextContent() {
    return true;
  }

  createInstance(newProps: PlainTextEditProps) {
    const widget = new RNPlainTextEdit();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNPlainTextEdit, newProps: PlainTextEditProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNPlainTextEdit, _updatePayload: never, oldProps: PlainTextEditProps, newProps: PlainTextEditProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const PlainTextEdit = registerComponent<PlainTextEditProps>(
  new PlainTextEditConfig(),
);

export { RNPlainTextEdit };
export { PlainTextEditNative } from "./scripts/RNPlainTextEdit";
