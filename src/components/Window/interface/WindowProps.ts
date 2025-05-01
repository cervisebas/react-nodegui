import { QMainWindowSignals, QMenuBar } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface WindowProps extends ViewProps<QMainWindowSignals> {
  menuBar?: QMenuBar;
}
