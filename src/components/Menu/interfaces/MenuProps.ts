import { QMenuSignals } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface MenuProps extends ViewProps<QMenuSignals> {
  title?: string;
}
