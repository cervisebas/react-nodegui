import { Direction, QBoxLayoutSignals } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface BoxViewProps extends ViewProps<QBoxLayoutSignals> {
  direction?: Direction;
}
