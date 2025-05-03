import { QProgressDialogSignals } from "@nodegui/nodegui";
import { DialogProps } from "../../Dialog/interfaces/DialogProps";
import { ProgressBarRange } from "./ProgressBarRange";

export interface ProgressDialogProps extends DialogProps<QProgressDialogSignals> {
  autoClose?: boolean;
  autoReset?: boolean;
  cancelButtonText?: string;
  labelText?: string;
  maxValue?: number;
  minValue?: number;
  /**
   * This property holds the time(`in milliseconds`) that must pass before the dialog appears.
   * 
   * https://doc.qt.io/qt-5/qprogressdialog.html#minimumDuration-prop
   * @default 4
   */
  minDuration?: number;
  range?: ProgressBarRange;
  value?: number;
  /**
   * Set this to `false` to allow the progress dialog opening
   * automatically when window first mounts
   */
  shouldReset?: boolean;
}
