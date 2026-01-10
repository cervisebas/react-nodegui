import { QColor } from "@nodegui/nodegui";
import { ColorDialogOption } from "@nodegui/nodegui/dist/lib/QtWidgets/QColorDialog";
import { DialogOption } from "../../../interfaces/DialogOption";
import { setDialogProps } from "../../Dialog/utils/setDialogProps";
import { ColorDialogProps } from "../interfaces/ColorDialogProps";
import { RNColorDialog } from "../scripts/RNColorDialog";

export function setColorDialogProps(
  widget: RNColorDialog,
  newProps: ColorDialogProps,
  oldProps: ColorDialogProps,
) {
  const setter: ColorDialogProps = {
    set currentColor(currentColor: QColor) {
      widget.setCurrentColor(currentColor);
    },
    set option({ option, on }: DialogOption<ColorDialogOption>) {
      widget.setOption(option, on);
    },
    set options(options: ColorDialogOption) {
      widget.setOptions(options);
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}