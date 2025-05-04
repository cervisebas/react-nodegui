import { QFontDialogSignals, QFont, FontDialogOption } from "@nodegui/nodegui";
import { DialogOption } from "../../../interfaces/DialogOption";
import { DialogProps } from "../../Dialog/interfaces/DialogProps";
import { RNFontDialog } from "../scripts/RNFontDialog";

export interface FontDialogProps extends DialogProps<QFontDialogSignals, RNFontDialog> {
  currentFont?: QFont;
  option?: DialogOption<FontDialogOption>;
  options?: FontDialogOption;
}
