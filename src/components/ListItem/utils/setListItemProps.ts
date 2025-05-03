import { QIcon } from "@nodegui/nodegui";
import { ListItemProps } from "../interfaces/ListItemProps";
import { RNListItem } from "../scripts/RNListItem";

export function setListItemProps(
  widget: RNListItem,
  newProps: ListItemProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _oldProps: ListItemProps,
) {
  const setter: ListItemProps = {
    set title(text: string) {
      widget.setText(text);
    },
    set icon(qicon: QIcon) {
      widget.setIcon(qicon);
    }
  };
  Object.assign(setter, newProps);
}
