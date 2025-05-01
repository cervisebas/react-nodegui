import { QAbstractButton, QAbstractButtonSignals, QIcon, QSize } from "@nodegui/nodegui";
import { setViewProps } from "../components/View/utils/setViewProps";
import { AbstractButtonProps } from "../interfaces/AbstractButtonProps";

export function setAbstractButtonProps<Signals extends QAbstractButtonSignals>(
  widget: QAbstractButton<Signals>,
  newProps: AbstractButtonProps<Signals>,
  oldProps: AbstractButtonProps<Signals>
) {
  const setter: AbstractButtonProps<Signals> = {
    set children(childrenText: string) {
      widget.setText(childrenText);
    },
    set text(buttonText: string) {
      widget.setText(buttonText);
    },
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    },
    set iconSize(iconSize: QSize) {
      widget.setIconSize(iconSize);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
