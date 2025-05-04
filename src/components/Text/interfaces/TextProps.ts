import { QLabelSignals, TextInteractionFlag } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNText } from "../scripts/RNText";

export interface TextProps<Ref = RNText> extends ViewBaseProps<QLabelSignals> {
  ref?: React.Ref<Ref>;
  children?: string | number | Array<string | number>;
  wordWrap?: boolean;
  scaledContents?: boolean;
  openExternalLinks?: boolean;
  textInteractionFlags?: TextInteractionFlag;
}
