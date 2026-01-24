import { setViewProps } from "../../View/utils/setViewProps";
import { ListProps } from "../interfaces/ListProps";
import { RNList } from "../scripts/RNList";

export function setListProps(
  widget: RNList,
  newProps: ListProps,
  oldProps: ListProps,
) {
  const setter: ListProps = {};
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
