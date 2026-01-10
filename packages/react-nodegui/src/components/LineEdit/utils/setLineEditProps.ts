import { EchoMode } from "@nodegui/nodegui";
import { setViewProps } from "../../View/utils/setViewProps";
import { LineEditProps } from "../interfaces/LineEditProps";
import { RNLineEdit } from "../scripts/RNLineEdit";

export function setLineEditProps(widget: RNLineEdit, newProps: LineEditProps, oldProps: LineEditProps) {
  const setter: LineEditProps = {
    set text(text: string) {
      if (text) {
        widget.setText(text);
      } else {
        widget.clear();
      }
    },
    set placeholderText(text: string) {
      widget.setPlaceholderText(text);
    },
    set readOnly(isReadOnly: boolean) {
      widget.setReadOnly(isReadOnly);
    },
    set echoMode(mode: EchoMode) {
      widget.setEchoMode(mode);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};