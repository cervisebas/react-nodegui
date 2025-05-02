import { InsertPolicy, QComboBoxSignals, QSize, QVariant, SizeAdjustPolicy } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";
import { ComboBoxItem } from "./ComboBoxItem";

export interface ComboBoxProps extends ViewProps<QComboBoxSignals> {
  items?: ComboBoxItem[];
  count?: number;
  iconSize?: QSize;
  frame?: boolean;
  currentIndex?: number;
  currentData?: QVariant;
  currentText?: string;
  duplicatesEnabled?: boolean;
  editable?: boolean;
  insertPolicy?: InsertPolicy;
  maxCount?: number;
  maxVisibleItems?: number;
  minimumContentsLength?: number;
  modelColumn?: number;
  sizeAdjustPolicy?: SizeAdjustPolicy;
}
