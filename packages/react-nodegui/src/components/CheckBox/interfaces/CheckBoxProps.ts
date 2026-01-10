import { QCheckBoxSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../../../interfaces/AbstractButtonProps";
import { RNCheckBox } from "../scripts/RNCheckBox";

export interface CheckBoxProps extends AbstractButtonProps<QCheckBoxSignals> {
  ref?: React.Ref<RNCheckBox | null>;
  checked?: boolean;
}
