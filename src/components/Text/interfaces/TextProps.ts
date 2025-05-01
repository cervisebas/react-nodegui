import { QLabelSignals, TextInteractionFlag } from "@nodegui/nodegui";
import { ViewProps } from "../../View/interface/ViewProps";

export interface TextProps extends ViewProps<QLabelSignals> {
  children?: string | number | Array<string | number>;
  wordWrap?: boolean;
  scaledContents?: boolean;
  openExternalLinks?: boolean;
  textInteractionFlags?: TextInteractionFlag;
}
