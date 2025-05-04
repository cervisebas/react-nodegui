import { QRadioButtonSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../../../interfaces/AbstractButtonProps";
import { RNRadioButton } from "../scripts/RNRadioButton";

export interface RadioButtonProps extends AbstractButtonProps<QRadioButtonSignals> {
  ref?: React.Ref<RNRadioButton>;
}
