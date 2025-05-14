import { QSvgWidget } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";

export interface SvgProps extends ViewBaseProps<QSvgWidget> {
  source?: string;
}
