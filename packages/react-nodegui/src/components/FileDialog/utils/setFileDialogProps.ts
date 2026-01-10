import { Option } from "@nodegui/nodegui";
import { DialogOption } from "../../../interfaces/DialogOption";
import { setDialogProps } from "../../Dialog/utils/setDialogProps";
import { FileDialogProps, FileDialogLabelText } from "../interfaces/FileDialogLabelText";
import { RNFileDialog } from "../scripts/RNFileDialog";

export function setFileDialogProps(
  widget: RNFileDialog,
  newProps: FileDialogProps,
  oldProps: FileDialogProps,
) {
  const setter: FileDialogProps = {
    set defaultSuffix(defaultSuffix: string) {
      widget.setDefaultSuffix(defaultSuffix);
    },
    set supportedSchemes(supportedSchemes: string[]) {
      widget.setSupportedSchemes(supportedSchemes);
    },
    set labelText(labelText: FileDialogLabelText) {
      widget.setLabelText(labelText.label, labelText.text);
    },
    set option({option, on}: DialogOption) {
      widget.setOption(option, on)
    },
    set options(options: Option) {
      widget.setOptions(options);
    }
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}
