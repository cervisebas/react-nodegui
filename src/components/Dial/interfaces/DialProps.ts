import { QDialSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNDial } from "../scripts/RNDial";

export interface DialProps extends ViewBaseProps<QDialSignals> {
  ref?: React.Ref<RNDial>;
  notchesVisible?: boolean;
  wrapping?: boolean;
  notchTarget?: number;
}
