import { QDialSignals } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface DialProps extends ViewProps<QDialSignals> {
  notchesVisible?: boolean;
  wrapping?: boolean;
  notchTarget?: number;
}
