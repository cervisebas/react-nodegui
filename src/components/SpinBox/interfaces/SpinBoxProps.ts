import { QSpinBoxSignals } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";
import { Range } from "../interfaces/Range";

export interface SpinBoxProps extends ViewProps<QSpinBoxSignals> {
  prefix?: string;
  suffix?: string;
  singleStep?: number;
  range?: Range;
  value?: number;
}
