import { DialogLabel, QFileDialogSignals, Option } from "@nodegui/nodegui";
import { DialogProps } from "../../Dialog/interfaces/DialogProps";
import { DialogOption } from "../../../interfaces/DialogOption";

export interface FileDialogLabelText{
  label: DialogLabel;
  text: string;
}

export interface FileDialogProps extends DialogProps<QFileDialogSignals> {
  defaultSuffix?: string;
  supportedSchemes?: string[];
  labelText?: FileDialogLabelText;
  option?: DialogOption;
  options?: Option;
}
