import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { TabProps } from "./interfaces/TabProps";
import { RNTab } from "./scripts/RNTab";

class TabsConfig extends ComponentConfig<TabProps, RNTab> {
  tagName = RNTab.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: TabProps) {
    const widget = new RNTab();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNTab, newProps: TabProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
  }
  
  finalizeInitialChildren() {
    return true;
  }
  
  commitUpdate(instance: RNTab, _updatePayload: never, oldProps: TabProps, newProps: TabProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Tabs = registerComponent<TabProps>(new TabsConfig());
export { RNTab };
