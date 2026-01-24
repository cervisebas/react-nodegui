import { QPlainTextEditSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNPlainTextEdit } from "../scripts/RNPlainTextEdit";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export interface PlainTextEditProps extends ViewBaseProps<QPlainTextEditSignals> {
  ref?: React.Ref<RNPlainTextEdit | null>;
  text?: string;
  readOnly?: boolean;
  placeholderText?: string;
  style?:
    & ViewBaseProps<QPlainTextEditSignals>['style']
    & Partial<Pick<
      StyleProperties,
      | 'selectionColor'
      | 'selectionBackgroundColor'
      | 'backgroundAttachment'
    >>;
}
