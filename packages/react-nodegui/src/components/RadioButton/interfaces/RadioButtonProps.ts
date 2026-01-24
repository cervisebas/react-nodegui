import { QRadioButtonSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../../../interfaces/AbstractButtonProps";
import { RNRadioButton } from "../scripts/RNRadioButton";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export interface RadioButtonProps extends AbstractButtonProps<QRadioButtonSignals> {
  ref?: React.Ref<RNRadioButton | null>;
  styles?: AbstractButtonProps<QRadioButtonSignals>['style'] & Pick<StyleProperties, 'spacing'>;
}
