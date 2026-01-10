import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { SystemTrayIconProps } from "./interfaces/SystemTrayIconProps";
import { RNSystemTrayIcon } from "./scripts/RNSystemTrayIcon";

class SystemTrayIconConfig extends ComponentConfig {
  tagName = RNSystemTrayIcon.tagName;

  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: SystemTrayIconProps) {
    const widget = new RNSystemTrayIcon();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNSystemTrayIcon, newProps: SystemTrayIconProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
  }

  commitUpdate(instance: RNSystemTrayIcon, _updatePayload: never, oldProps: SystemTrayIconProps, newProps: SystemTrayIconProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const SystemTrayIcon = registerComponent<SystemTrayIconProps>(
  new SystemTrayIconConfig(),
);
