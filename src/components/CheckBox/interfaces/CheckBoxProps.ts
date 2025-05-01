import { QCheckBoxSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../../../interfaces/AbstractButtonProps";

export interface CheckBoxProps extends AbstractButtonProps<QCheckBoxSignals> {
  checked?: boolean;
}
