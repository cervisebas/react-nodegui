import { QLineEditSignals, EchoMode } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface LineEditProps extends ViewProps<QLineEditSignals> {
  text?: string;
  placeholderText?: string;
  readOnly?: boolean;
  echoMode?: EchoMode;
}
