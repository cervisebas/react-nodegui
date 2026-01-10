import { QSpinBoxSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { Range } from "../interfaces/Range";
import { RNSpinBox } from "../scripts/RNSpinBox";

export interface SpinBoxProps extends ViewBaseProps<QSpinBoxSignals> {
  ref?: React.Ref<RNSpinBox | null>;
  prefix?: string;
  suffix?: string;
  singleStep?: number;
  range?: Range;
  value?: number;
}
