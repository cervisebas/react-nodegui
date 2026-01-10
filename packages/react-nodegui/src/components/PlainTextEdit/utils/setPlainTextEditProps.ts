import { setViewProps } from "../../View/utils/setViewProps";
import { PlainTextEditProps } from "../interfaces/PlainTextEditProps";
import { RNPlainTextEdit } from "../scripts/RNPlainTextEdit";

export function setPlainTextEditProps(
  widget: RNPlainTextEdit,
  newProps: PlainTextEditProps,
  oldProps: PlainTextEditProps,
) {
  const setter: PlainTextEditProps = {
    set text(text: string) {
      if (text) {
        widget.setPlainText(text);
      } else {
        widget.clear();
      }
    },
    set readOnly(isReadOnly: boolean) {
      widget.setReadOnly(isReadOnly);
    },
    set placeholderText(text: string) {
      widget.setPlaceholderText(text);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
