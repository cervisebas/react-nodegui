import { QListWidgetSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNList } from "../scripts/RNList";

export interface ListProps extends ViewBaseProps<QListWidgetSignals> {
  ref?: React.Ref<RNList | null>;
}