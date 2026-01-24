import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { ListItemProps } from "./interfaces/ListItemProps";
import { RNListItem } from "./scripts/RNListItem";

class ListItemConfig extends ComponentConfig<ListItemProps, RNListItem> {
  tagName = RNListItem.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: ListItemProps) {
    const item = new RNListItem();
    item.setProps(newProps, {});
    return item;
  }
  
  finalizeInitialChildren() {
    return false;
  }
  
  commitUpdate(instance: RNListItem, _updatePayload: never, oldProps: ListItemProps, newProps: ListItemProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const ListItem = registerComponent<ListItemProps>(new ListItemConfig());
