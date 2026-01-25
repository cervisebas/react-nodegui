import { QCheckBoxSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../../../interfaces/AbstractButtonProps";
import { RNCheckBox } from "../scripts/RNCheckBox";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";
import { ViewStyles } from "../../../interfaces/ViewBaseProps";

export type CheckBoxStyles =  
  & ViewStyles
  & Partial<Pick<
    StyleProperties,
    'spacing'
  >>;

export interface CheckBoxProps extends AbstractButtonProps<QCheckBoxSignals, CheckBoxStyles> {
  ref?: React.Ref<RNCheckBox | null>;
  checked?: boolean;
}
