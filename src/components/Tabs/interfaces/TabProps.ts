import { QTabWidgetSignals, TabPosition } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface TabProps extends ViewProps<QTabWidgetSignals> {
  tabPosition?: TabPosition;
}
