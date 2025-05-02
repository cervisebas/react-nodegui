import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { DialProps } from "./interfaces/DialProps";
import { RNDial } from "./scripts/RNDial";

class DialConfig extends ComponentConfig<DialProps, RNDial> {
  tagName = RNDial.tagName;
  
  shouldSetTextContent() {
    return true;
  }
  
  createInstance(newProps: DialProps) {
    const widget = new RNDial();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNDial, newProps: DialProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNDial, _updatePayload: never, oldProps: DialProps, newProps: DialProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Dial = registerComponent<DialProps>(new DialConfig());
