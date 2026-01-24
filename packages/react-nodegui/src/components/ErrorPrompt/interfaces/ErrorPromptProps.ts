import { QErrorMessageSignals } from "@nodegui/nodegui";
import { DialogProps } from "../../Dialog/interfaces/DialogProps";
import { RNErrorPrompt } from "../scripts/RNErrorPrompt";

export interface ErrorPromptProps extends DialogProps<QErrorMessageSignals, RNErrorPrompt> {
  message: string;
}
