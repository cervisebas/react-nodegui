import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { ProgressBarProps } from "./interface/ProgressBarProps";
import { ProgressBarRef, RNProgressBar } from "./scripts/RNProgressBar";

class ProgressBarConfig extends ComponentConfig<ProgressBarProps, RNProgressBar> {
  tagName = RNProgressBar.tagName;

  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: ProgressBarProps) {
    const widget = new RNProgressBar();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNProgressBar, newProps: ProgressBarProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNProgressBar, _updatePayload: never, oldProps: ProgressBarProps, newProps: ProgressBarProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const ProgressBar = registerComponent<ProgressBarProps>(
  new ProgressBarConfig(),
);

export { RNProgressBar, ProgressBarRef };
