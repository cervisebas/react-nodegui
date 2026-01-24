import { QDialogSignals, QFont, FocusReason } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNDialog } from "../scripts/RNDialog";
import { ViewProps } from "../../View/interface/ViewProps";

export interface DialogProps<T extends object = QDialogSignals, Ref = RNDialog> extends ViewBaseProps<T> {
  ref?: React.Ref<Ref | null>;
  open?: boolean;
  font?: QFont;
  focus?: FocusReason;
  modal?: boolean;
  result?: number;
  reject?: boolean;
  enableSizeGrip?: boolean;
  style?: ViewProps<T>['style'];
}
