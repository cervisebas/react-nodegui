import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { StackedItemProps } from "./interfaces/StackedItemProps";
import { RNStackedItem } from "./scripts/RNStackedItem";

class StackedItemConfig extends ComponentConfig<StackedItemProps, RNStackedItem> {
  tagName = RNStackedItem.tagName;

  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: StackedItemProps) {
    const widget = new RNStackedItem();
    widget.setProps(newProps, {name: ''});
    return widget;
  }

  commitMount() {
    return;
  }
  
  commitUpdate(instance: RNStackedItem, _updatePayload: never, oldProps: StackedItemProps, newProps: StackedItemProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const StackedItem = registerComponent<StackedItemProps>(new StackedItemConfig());
export { RNStackedItem };
