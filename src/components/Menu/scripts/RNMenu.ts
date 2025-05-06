import { Component, NativeElement, QMenu } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { RNAction } from "../../Action/scripts/RNAction";
import { MenuProps } from "../interfaces/MenuProps";
import { setMenuProps } from "../utils/setMenuProps";

export type MenuNative = NativeElement & QMenu;

export class RNMenu extends QMenu implements RNWidget {
  native!: MenuNative;
  static tagName = "menu";

  setProps(newProps: MenuProps, oldProps: MenuProps) {
    setMenuProps(this, newProps, oldProps);
  }

  appendInitialChild(child: Component) {
    this.appendChild(child);
  }

  appendChild(child: Component) {
    if (!(child instanceof RNAction)) {
      console.warn("Menu only supports Action as its children");
      return;
    }

    this.addAction(child);
  }

  insertBefore() {
    throwUnsupported(this);
  }

  removeChild(child: Component) {
    if (child instanceof RNAction) {
      this.removeAction(child);
    }
  }
}
