import { QProgressBar } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { ProgressBarProps } from "../interface/ProgressBarProps";
import { setProgressBarProps } from "../utils/setProgressBarProps";

export class RNProgressBar extends QProgressBar implements RNWidget {
  static tagName = "progressbar";

  setProps(newProps: ProgressBarProps, oldProps: ProgressBarProps): void {
    setProgressBarProps(this, newProps, oldProps);
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
