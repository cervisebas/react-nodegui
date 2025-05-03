import { QFontDialogSignals, QFont, FontDialogOption } from "@nodegui/nodegui";
import { DialogOption } from "../../../interfaces/DialogOption";
import { DialogProps } from "../../Dialog/interfaces/DialogProps";

export interface FontDialogProps extends DialogProps<QFontDialogSignals> {
  currentFont?: QFont;
  option?: DialogOption<FontDialogOption>;
  options?: FontDialogOption;
}
