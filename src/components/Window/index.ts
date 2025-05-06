import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { WindowProps } from "./interface/WindowProps";
import { RNWindow, WindowRef } from "./scripts/RNWindow";

class WindowConfig extends ComponentConfig<WindowProps, RNWindow> {
  tagName = RNWindow.tagName;

  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: WindowProps) {
    const window = new RNWindow();
    window.setProps(newProps, {});
    return window;
  }

  finalizeInitialChildren() {
    return true;
  }

  commitMount(instance: RNWindow, newProps: WindowProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNWindow, _updatePayload: never, oldProps: WindowProps, newProps: WindowProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Window = registerComponent<WindowProps>(new WindowConfig());
export { RNWindow, WindowRef };
