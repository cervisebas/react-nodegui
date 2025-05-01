import { QMenuBarSignals } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface MenuBarProps extends ViewProps<QMenuBarSignals> {
  nativeMenuBar?: boolean;
}
