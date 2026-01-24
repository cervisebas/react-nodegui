import { QMainWindowSignals, QMenuBar } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNWidget } from "../../../classes/RNWidget";

export interface WindowProps extends ViewBaseProps<QMainWindowSignals> {
  ref?: React.Ref<RNWidget | null>;
  menuBar?: QMenuBar;
}
