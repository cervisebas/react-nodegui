import { QPushButtonSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../../../interfaces/AbstractButtonProps";
import { RNButton } from "../scripts/RNButton";

export interface ButtonProps extends AbstractButtonProps<QPushButtonSignals> {
  ref?: React.Ref<RNButton>;
  flat?: boolean;
}