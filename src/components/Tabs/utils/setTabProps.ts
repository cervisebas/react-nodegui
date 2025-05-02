import { TabPosition } from "@nodegui/nodegui";
import { setViewProps } from "../../View/utils/setViewProps";
import { TabProps } from "../interfaces/TabProps";
import { RNTab } from "../scripts/RNTab";

export function setTabProps(
  widget: RNTab,
  newProps: TabProps,
  oldProps: TabProps,
) {
  const setter: TabProps = {
    set tabPosition(value: TabPosition) {
      widget.setTabPosition(value);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
