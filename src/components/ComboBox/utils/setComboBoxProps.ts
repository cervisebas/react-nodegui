import { QSize, QVariant, InsertPolicy, SizeAdjustPolicy } from "@nodegui/nodegui";
import { setViewProps } from "../../View/utils/setViewProps";
import { ComboBoxItem } from "../interfaces/ComboBoxItem";
import { ComboBoxProps } from "../interfaces/ComboBoxProps";
import { RNComboBox } from "../scripts/RNComboBox";

export function setComboBoxProps(
  widget: RNComboBox,
  newProps: ComboBoxProps,
  oldProps: ComboBoxProps,
) {
  const setter: ComboBoxProps = {
    set items(items: ComboBoxItem[]) {
      widget.clear();
      items.forEach(item => {
        widget.addItem(item.icon, item.text, item.userData);
      });
    },
    set count(count: number) {
      widget.setProperty("count", count);
    },
    set iconSize(iconSize: QSize) {
      widget.setProperty("iconSize", iconSize.native!);
    },
    set frame(frame: boolean) {
      widget.setProperty("frame", frame);
    },
    set currentIndex(currentIndex: number) {
      widget.setProperty("currentIndex", currentIndex);
    },
    set currentData(value: QVariant) {
      widget.setProperty("currentData", value.native!);
    },
    set currentText(text: string) {
      widget.setProperty("currentText", text);
    },
    set duplicatesEnabled(enabled: boolean) {
      widget.setProperty("duplicatesEnabled", enabled);
    },
    set editable(enabled: boolean) {
      widget.setProperty("editable", enabled);
    },
    set insertPolicy(policy: InsertPolicy) {
      widget.setProperty("insertPolicy", policy);
    },
    set maxCount(count: number) {
      widget.setProperty("maxCount", count);
    },
    set maxVisibleItems(count: number) {
      widget.setProperty("maxVisibleItems", count);
    },
    set minimumContentsLength(count: number) {
      widget.setProperty("minimumContentsLength", count);
    },
    set modelColumn(column: number) {
      widget.setProperty("modelColumn", column);
    },
    set sizeAdjustPolicy(policy: SizeAdjustPolicy) {
      widget.setProperty("sizeAdjustPolicy", policy);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
