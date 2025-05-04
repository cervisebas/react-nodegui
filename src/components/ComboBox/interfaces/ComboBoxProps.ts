import { InsertPolicy, QComboBoxSignals, QSize, QVariant, SizeAdjustPolicy } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { ComboBoxItem } from "./ComboBoxItem";
import { RNComboBox } from "../scripts/RNComboBox";

export interface ComboBoxProps extends ViewBaseProps<QComboBoxSignals> {
  ref?: React.Ref<RNComboBox>;
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
