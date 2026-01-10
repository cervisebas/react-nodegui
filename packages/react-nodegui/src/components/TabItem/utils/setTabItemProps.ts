import { QIcon } from "@nodegui/nodegui";
import { TabItemProps } from "../interfaces/TabItemProps";
import { RNTabItem } from "../scripts/RNTabItem";
import { RNTab } from "../../Tabs/scripts/RNTab";

export function setTabItemProps(
  tabItem: RNTabItem,
  parentTab: RNTab,
  newProps: TabItemProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _oldProps: TabItemProps,
) {
  if (!tabItem.actualTabWidget) {
    return;
  }
  const tabIndex = parentTab.indexOf(tabItem.actualTabWidget);
  if (tabIndex < 0) {
    console.error("TabItem is not part of the parent tab it references to");
    return;
  }

  const setter: TabItemProps = {
    set title(text: string) {
      parentTab.setTabText(tabIndex, text);
    },
    set icon(qicon: QIcon) {
      parentTab.setTabIcon(tabIndex, qicon);
    }
  };
  Object.assign(setter, newProps);
}
