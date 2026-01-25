import { QPlainTextEditSignals } from "@nodegui/nodegui";
import { ViewBaseProps, ViewStyles } from "../../../interfaces/ViewBaseProps";
import { RNPlainTextEdit } from "../scripts/RNPlainTextEdit";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export type PlainTextEditStyles =  
  & ViewStyles
  & Partial<Pick<
    StyleProperties,
    | 'selectionColor'
    | 'selectionBackgroundColor'
    | 'backgroundAttachment'
  >>;

export interface PlainTextEditProps extends ViewBaseProps<QPlainTextEditSignals, PlainTextEditStyles> {
  ref?: React.Ref<RNPlainTextEdit | null>;
  text?: string;
  readOnly?: boolean;
  placeholderText?: string;
}
