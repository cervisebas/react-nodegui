import { QLineEditSignals, EchoMode } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNLineEdit } from "../scripts/RNLineEdit";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export interface LineEditProps extends ViewBaseProps<QLineEditSignals> {
  ref?: React.Ref<RNLineEdit | null>;
  text?: string;
  placeholderText?: string;
  readOnly?: boolean;
  echoMode?: EchoMode;
  style?:
    & ViewBaseProps<QLineEditSignals>['style']
    & Partial<Pick<
      StyleProperties,
      | 'selectionColor'
      | 'selectionBackgroundColor'
      | 'lineeditPasswordCharacter'
      | 'lineeditPasswordMaskDelay'
    >>;
}
