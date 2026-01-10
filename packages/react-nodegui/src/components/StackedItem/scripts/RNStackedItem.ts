import { RNView } from "../../View/scripts/RNView";
import { StackedItemProps } from "../interfaces/StackedItemProps";

export class RNStackedItem extends RNView {
  static tagName = "stacked-item";
  name?: string;

  setProps(newProps: StackedItemProps, oldProps: StackedItemProps) {
    this.name = newProps.name;
    super.setProps(newProps, oldProps);
  }
}
