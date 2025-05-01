import { QPlainTextEditSignals } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface PlainTextEditProps extends ViewProps<QPlainTextEditSignals> {
  text?: string;
  readOnly?: boolean;
  placeholderText?: string;
}
