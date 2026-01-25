import { QMenuBarSignals } from "@nodegui/nodegui";
import { ViewBaseProps, ViewStyles } from "../../../interfaces/ViewBaseProps";
import { RNMenuBar } from "../scripts/RNMenuBar";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export type MenuBarStyles =  
  & ViewStyles
  & Partial<Pick<
    StyleProperties,
    'spacing'
  >>;

export interface MenuBarProps extends ViewBaseProps<QMenuBarSignals, MenuBarStyles> {
  ref?: React.Ref<RNMenuBar | null>;
  nativeMenuBar?: boolean;
}
