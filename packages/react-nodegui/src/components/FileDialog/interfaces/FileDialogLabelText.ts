import { DialogLabel, QFileDialogSignals, Option } from "@nodegui/nodegui";
import { DialogProps } from "../../Dialog/interfaces/DialogProps";
import { DialogOption } from "../../../interfaces/DialogOption";
import { RNFileDialog } from "../scripts/RNFileDialog";

export interface FileDialogLabelText{
  label: DialogLabel;
  text: string;
}

export interface FileDialogProps extends DialogProps<QFileDialogSignals, RNFileDialog> {
  defaultSuffix?: string;
  supportedSchemes?: string[];
  labelText?: FileDialogLabelText;
  option?: DialogOption;
  options?: Option;
}
