import { QIcon, QVariant } from "@nodegui/nodegui";

export interface ComboBoxItem {
  text: string;
  icon?: QIcon;
  userData?: QVariant;
}
