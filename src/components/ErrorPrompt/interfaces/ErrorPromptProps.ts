import { QErrorMessageSignals } from "@nodegui/nodegui";
import { DialogProps } from "../../Dialog/interfaces/DialogProps";

export interface ErrorPromptProps extends DialogProps<QErrorMessageSignals> {
  message: string;
}
