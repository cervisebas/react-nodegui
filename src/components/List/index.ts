import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { ListProps } from "./interfaces/ListProps";
import { RNList } from "./scripts/RNList";

class ListConfig extends ComponentConfig<ListProps, RNList> {
  tagName = RNList.tagName;

  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: ListProps) {
    const widget = new RNList();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNList, newProps: ListProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNList, _updatePayload: never, oldProps: ListProps, newProps: ListProps) {
    instance.setProps(newProps, oldProps);
  }
}

/**
 * React implementation of nodegui's [QListWidget](https://docs.nodegui.org/docs/api/generated/classes/qlistwidget/)
 * @example
 * ```javascriptreact
 * return (
 *    <List>
        <ListItem text="NodeGui is great" />
        <ListItem text="This item has a child">
          <View>
            <Text>Hello World</Text>
          </View>
        </ListItem>
      </List>
 * )
 * ```
 */

export const List = registerComponent<ListProps>(new ListConfig());
