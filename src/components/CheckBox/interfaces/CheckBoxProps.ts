import { QCheckBoxSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../../../interfaces/AbstractButtonProps";
import { RNCheckBox } from "../scripts/RNCheckBox";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export interface CheckBoxProps extends AbstractButtonProps<QCheckBoxSignals> {
  ref?: React.Ref<RNCheckBox | null>;
  checked?: boolean;
  style?:
    & AbstractButtonProps<QCheckBoxSignals>['style']
    & Partial<Pick<
      StyleProperties,
      'spacing'
    >>;
}
