import { QScrollAreaSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNScrollArea } from "../scripts/RNScrollArea";

export interface ScrollAreaProps extends ViewBaseProps<QScrollAreaSignals> {
  ref?: React.Ref<RNScrollArea>;
  widgetResizable?: boolean;
}
