import { QInputDialogSignals, InputMode, InputDialogOptions, EchoMode } from "@nodegui/nodegui";
import { DialogProps } from "../../Dialog/interfaces/DialogProps";

export interface InputDialogProps extends DialogProps<QInputDialogSignals>{
  cancelButtonText?: string,
  comboBoxEditable?: boolean,
  doubleDecimals?: number,
  doubleMax?: number,
  doubleMin?: number,
  doubleStep?: number,
  doubleValue?: number,
  inputMode?: InputMode,
  intMax?: number,
  intMin?: number,
  intStep?: number,
  intValue?: number,
  labelText?: string,
  okButtonText?: string,
  options?: InputDialogOptions,
  textEchoMode?: EchoMode,
  textValue?: string
}
