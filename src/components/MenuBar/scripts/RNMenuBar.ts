import { QMenuBar, QMenu } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { MenuBarProps } from "../interfaces/MenuBarProps";
import { setMenuBarProps } from "../utils/setMenuBarProps";

export class RNMenuBar extends QMenuBar implements RNWidget {
  static tagName = "menubar";

  setProps(newProps: MenuBarProps, oldProps: MenuBarProps): void {
    setMenuBarProps(this, newProps, oldProps);
  }

  appendInitialChild(child: QMenu) {
    if (child instanceof QMenu) {
      this.addMenu(child);
    } else {
      console.warn("MenuBar only supports Menu as its children");
    }
  }

  appendChild(child: QMenu) {
    this.appendInitialChild(child);
  }

  insertBefore() {
    console.warn(
      "Updating menubar is not yet supported. Please help by raising a PR"
    );
    throwUnsupported(this);
  }

  removeChild() {
    console.warn(
      "Updating menubar is not yet supported. Please help by raising a PR"
    );
    throwUnsupported(this);
  }
}
