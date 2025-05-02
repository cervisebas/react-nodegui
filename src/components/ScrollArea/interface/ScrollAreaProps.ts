import { QScrollAreaSignals } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface ScrollAreaProps extends ViewProps<QScrollAreaSignals> {
  widgetResizable?: boolean;
}
