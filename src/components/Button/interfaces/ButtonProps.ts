import { QPushButtonSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../../../interfaces/AbstractButtonProps";

export interface ButtonProps extends AbstractButtonProps<QPushButtonSignals> {
  flat?: boolean;
}