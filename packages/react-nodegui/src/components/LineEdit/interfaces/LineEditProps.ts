import { QLineEditSignals, EchoMode } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNLineEdit } from "../scripts/RNLineEdit";

export interface LineEditProps extends ViewBaseProps<QLineEditSignals> {
  ref?: React.Ref<RNLineEdit | null>;
  text?: string;
  placeholderText?: string;
  readOnly?: boolean;
  echoMode?: EchoMode;
}
