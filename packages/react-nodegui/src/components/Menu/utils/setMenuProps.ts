import { setViewProps } from "../../View/utils/setViewProps";
import { MenuProps } from "../interfaces/MenuProps";
import { RNMenu } from "../scripts/RNMenu";

export function setMenuProps(widget: RNMenu, newProps: MenuProps, oldProps: MenuProps) {
  const setter: MenuProps = {
    set title(title: string) {
      widget.setTitle(title);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
