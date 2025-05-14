import { NativeElement, QSvgWidget } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { setSvgProps } from "../utils/setSvgProps";
import { SvgProps } from "../interfaces/SvgProps";
import { throwUnsupported } from "../../../utils/throwUnsupported";

export type SvgNative = NativeElement & QSvgWidget;

export class RNSvg extends QSvgWidget implements RNWidget {
  native!: SvgNative;
  static tagName = 'svg';

  setProps(newProps: SvgProps, oldProps: SvgProps) {
    setSvgProps(this, newProps, oldProps);
  }

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

}
