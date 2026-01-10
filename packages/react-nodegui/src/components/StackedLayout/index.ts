import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { StackedLayoutProps } from "./interfaces/StackedLayoutProps";
import { RNStackedLayout } from "./scripts/RNStackedLayout";

class StackedScreenConfig extends ComponentConfig<StackedLayoutProps, RNStackedLayout> {
  tagName = RNStackedLayout.tagName;

  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: StackedLayoutProps) {
    const widget = new RNStackedLayout();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount() {
    return;
  }
  
  commitUpdate(instance: RNStackedLayout, _updatePayload: never, oldProps: StackedLayoutProps, newProps: StackedLayoutProps) {
    instance.setProps(newProps, oldProps);
  }
}


export const StackedLayout = registerComponent<StackedLayoutProps>(new StackedScreenConfig());
export { RNStackedLayout };
export { StackedLayoutNative } from "./scripts/RNStackedLayout";
