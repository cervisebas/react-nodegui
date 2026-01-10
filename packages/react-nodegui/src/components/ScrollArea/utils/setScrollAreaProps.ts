import { setViewProps } from "../../View/utils/setViewProps";
import { ScrollAreaProps } from "../interface/ScrollAreaProps";
import { RNScrollArea } from "../scripts/RNScrollArea";

export function setScrollAreaProps (
  widget: RNScrollArea,
  newProps: ScrollAreaProps,
  oldProps: ScrollAreaProps,
) {
  const setter: ScrollAreaProps = {
    set widgetResizable(resizable: boolean) {
      widget.setWidgetResizable(resizable);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
