import { QFont, FontDialogOption } from "@nodegui/nodegui";
import { DialogOption } from "../../../interfaces/DialogOption";
import { setDialogProps } from "../../Dialog/utils/setDialogProps";
import { FontDialogProps } from "../interfaces/FontDialogProps";
import { RNFontDialog } from "../scripts/RNFontDialog";

export function setFontDialogProps(
  widget: RNFontDialog,
  newProps: FontDialogProps,
  oldProps: FontDialogProps,
) {
  const setter: FontDialogProps = {
    set currentFont(currentFont: QFont) {
      widget.setCurrentFont(currentFont);
    },
    set option({ option, on }: DialogOption<FontDialogOption>) {
      widget.setOption(option, on);
    },
    set options(options: FontDialogOption) {
      widget.setOptions(options);
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}
