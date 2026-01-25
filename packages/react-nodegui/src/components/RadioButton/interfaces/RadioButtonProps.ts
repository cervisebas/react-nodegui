import { QRadioButtonSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../../../interfaces/AbstractButtonProps";
import { RNRadioButton } from "../scripts/RNRadioButton";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";
import { ViewStyles } from "../../../interfaces/ViewBaseProps";

export type RadioButtonStyles =  
  & ViewStyles
  & Pick<StyleProperties, 'spacing'>;

export interface RadioButtonProps extends AbstractButtonProps<QRadioButtonSignals, RadioButtonStyles> {
  ref?: React.Ref<RNRadioButton | null>;
}
