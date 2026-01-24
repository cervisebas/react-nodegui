import { QMenuBarSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNMenuBar } from "../scripts/RNMenuBar";

export interface MenuBarProps extends ViewBaseProps<QMenuBarSignals> {
  ref?: React.Ref<RNMenuBar | null>;
  nativeMenuBar?: boolean;
}
