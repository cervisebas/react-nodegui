import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { MenuProps } from "./interfaces/MenuProps";
import { MenuRef, RNMenu } from "./scripts/RNMenu";

class MenuConfig extends ComponentConfig<MenuProps, RNMenu> {
  tagName = RNMenu.tagName;

  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: MenuProps) {
    const widget = new RNMenu();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNMenu, newProps: MenuProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNMenu, _updatePayload: never, oldProps: MenuProps, newProps: MenuProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Menu = registerComponent<MenuProps>(
  new MenuConfig(),
);

export { RNMenu, MenuRef };
