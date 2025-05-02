import { QDialogSignals, QFont, FocusReason } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface DialogProps<T extends object = QDialogSignals> extends ViewProps<T> {
  open?: boolean;
  font?: QFont;
  focus?: FocusReason;
  modal?: boolean;
  result?: number;
  reject?: boolean;
  enableSizeGrip?: boolean;
}
