import { QSizePolicyPolicy } from "@nodegui/nodegui";
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
    widget.setSizePolicy(QSizePolicyPolicy.Expanding, QSizePolicyPolicy.Expanding);
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNStackedLayout, newProps: StackedLayoutProps) {
    if (newProps.initialIndex) {
      instance.goToIndex(newProps.initialIndex);
    } else if (newProps.initialName) {
      instance.goToPage(newProps.initialName);
    }
  }
  
  commitUpdate(instance: RNStackedLayout, _updatePayload: never, oldProps: StackedLayoutProps, newProps: StackedLayoutProps) {
    instance.setProps(newProps, oldProps);
  }
}


export const StackedLayout = registerComponent<StackedLayoutProps>(new StackedScreenConfig());
export { RNStackedLayout };
export { StackedLayoutNative } from "./scripts/RNStackedLayout";
