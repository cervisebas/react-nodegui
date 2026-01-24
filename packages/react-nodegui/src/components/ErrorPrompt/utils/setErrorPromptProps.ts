import { setDialogProps } from "../../Dialog/utils/setDialogProps";
import { ErrorPromptProps } from "../interfaces/ErrorPromptProps";
import { RNErrorPrompt } from "../scripts/RNErrorPrompt";

export function setErrorPromptProps(
  widget: RNErrorPrompt,
  newProps: ErrorPromptProps,
  oldProps: ErrorPromptProps,
) {
  const setter: ErrorPromptProps = {
    set message(message: string) {
      widget.showMessage(message);
      widget.close();
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}
