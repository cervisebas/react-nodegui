import { QSystemTrayIcon, QMenu, QWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { SystemTrayIconProps } from "../interfaces/SystemTrayIconProps";
import { setSystemTrayIconProps } from "../utils/setSystemTrayIconProps";

export class RNSystemTrayIcon extends QSystemTrayIcon implements RNComponent {
  static tagName = "systemtrayicon";
  contextMenu: QMenu | null = null;

  setProps(newProps: SystemTrayIconProps, oldProps: SystemTrayIconProps) {
    setSystemTrayIconProps(this, newProps, oldProps);
  }
  
  appendInitialChild(child: QWidget<never>) {
    if (child instanceof QMenu) {
      if (!this.contextMenu) {
        this.contextMenu = child;
        this.setContextMenu(child);
      } else {
        console.warn("SystemTrayIcon can't have more than one Menu.");
      }
    } else {
      console.warn("SystemTrayIcon only supports Menu as its children");
    }
  }
  
  appendChild(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
  
  insertBefore() {
    throwUnsupported(this);
  }
  
  removeChild() {
    throwUnsupported(this);
  }
}
