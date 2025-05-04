import { QMenuSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNMenu } from "../scripts/RNMenu";

export interface MenuProps extends ViewBaseProps<QMenuSignals> {
  ref?: React.Ref<RNMenu>;
  title?: string;
}
