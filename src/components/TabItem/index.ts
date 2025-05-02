import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { TabItemProps } from "./interfaces/TabItemProps";
import { RNTabItem } from "./scripts/RNTabItem";

class TabItemConfig extends ComponentConfig<TabItemProps, RNTabItem> {
  tagName = RNTabItem.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: TabItemProps) {
    const item = new RNTabItem(null!);
    item.setProps(newProps, {});
    return item;
  }
  
  finalizeInitialChildren() {
    return false;
  }
  
  commitUpdate(instance: RNTabItem, _updatePayload: never, oldProps: TabItemProps, newProps: TabItemProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const TabItem = registerComponent<TabItemProps>(new TabItemConfig());
