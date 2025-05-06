import { NativeElement, QPushButton } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { setButtonProps } from "../utils/setButtonProps";
import { ButtonProps } from "../interfaces/ButtonProps";

export type ButtonRef = NativeElement & QPushButton;

export class RNButton extends QPushButton implements RNWidget {
  native!: ButtonRef;
  static tagName = "button";
  
  appendInitialChild() {
    throwUnsupported(this);
  }
  
  appendChild() {
    throwUnsupported(this);
  }
  
  insertBefore() {
    throwUnsupported(this);
  }
  
  removeChild() {
    throwUnsupported(this);
  }
  
  setProps(newProps: ButtonProps, oldProps: ButtonProps) {
    setButtonProps(this, newProps, oldProps);
  }
}