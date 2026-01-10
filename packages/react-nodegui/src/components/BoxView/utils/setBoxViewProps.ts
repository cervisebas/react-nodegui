import { Direction } from "@nodegui/nodegui";
import { setViewProps } from "../../View/utils/setViewProps";
import { BoxViewProps } from "../interface/BoxViewProps";
import { RNBoxView } from "../scripts/RNBoxView";

export const setBoxViewProps = (
  widget: RNBoxView,
  newProps: BoxViewProps,
  oldProps: BoxViewProps
) => {
  const setter: BoxViewProps = {
    set direction(direction: Direction) {
      widget.layout()?.setDirection(direction);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
