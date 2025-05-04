import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { MenuBarProps } from "./interfaces/MenuBarProps";
import { RNMenuBar } from "./scripts/RNMenuBar";

class MenuBarConfig extends ComponentConfig<MenuBarProps, RNMenuBar> {
  tagName = RNMenuBar.tagName;
  
  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: MenuBarProps) {
    const widget = new RNMenuBar();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNMenuBar, newProps: MenuBarProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNMenuBar, _updatePayload: never, oldProps: MenuBarProps, newProps: MenuBarProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const MenuBar = registerComponent<MenuBarProps>(new MenuBarConfig());
export { RNMenuBar };
