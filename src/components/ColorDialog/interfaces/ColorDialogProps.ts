import { QColorDialogSignals, QColor } from "@nodegui/nodegui";
import { ColorDialogOption } from "@nodegui/nodegui/dist/lib/QtWidgets/QColorDialog";
import { DialogProps } from "../../Dialog/interfaces/DialogProps";
import { DialogOption } from "../../../interfaces/DialogOption";
import { RNColorDialog } from "../scripts/RNColorDialog";

export interface ColorDialogProps extends DialogProps<QColorDialogSignals, RNColorDialog> {
  currentColor?: QColor;
  option?: DialogOption<ColorDialogOption>;
  options?: ColorDialogOption;
}
