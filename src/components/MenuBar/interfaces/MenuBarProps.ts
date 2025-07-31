import { QMenuBarSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNMenuBar } from "../scripts/RNMenuBar";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export interface MenuBarProps extends ViewBaseProps<QMenuBarSignals> {
  ref?: React.Ref<RNMenuBar | null>;
  nativeMenuBar?: boolean;
  style?:
    & ViewBaseProps<QMenuBarSignals>['style']
    & Partial<Pick<
      StyleProperties,
      'spacing'
    >>;
}
