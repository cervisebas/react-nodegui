import { QPlainTextEditSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNPlainTextEdit } from "../scripts/RNPlainTextEdit";

export interface PlainTextEditProps extends ViewBaseProps<QPlainTextEditSignals> {
  ref?: React.Ref<RNPlainTextEdit | null>;
  text?: string;
  readOnly?: boolean;
  placeholderText?: string;
}
