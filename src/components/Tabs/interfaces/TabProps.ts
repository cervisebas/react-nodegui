import { QTabWidgetSignals, TabPosition } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNTab } from "../scripts/RNTab";

export interface TabProps extends ViewBaseProps<QTabWidgetSignals> {
  ref?: React.Ref<RNTab | null>;
  tabPosition?: TabPosition;
}
