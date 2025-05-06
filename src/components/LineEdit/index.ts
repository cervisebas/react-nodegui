import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { LineEditProps } from "./interfaces/LineEditProps";
import { LineEditRef, RNLineEdit } from "./scripts/RNLineEdit";

class LineEditConfig extends ComponentConfig<LineEditProps, RNLineEdit> {
  tagName = RNLineEdit.tagName;
  
  shouldSetTextContent() {
    return true;
  }
  
  createInstance(newProps: LineEditProps) {
    const widget = new RNLineEdit();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNLineEdit, newProps: LineEditProps): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNLineEdit, _updatePayload: never, oldProps: LineEditProps, newProps: LineEditProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const LineEdit = registerComponent<LineEditProps>(new LineEditConfig());
export { RNLineEdit, LineEditRef };
