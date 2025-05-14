import { setViewProps } from "../../View/utils/setViewProps";
import { SvgProps } from "../interfaces/SvgProps";
import { RNSvg } from "../scripts/RNSvg";
import { getSvgSource } from "./getSvgSource";

export function setSvgProps(widget: RNSvg, newProps: SvgProps, oldProps: SvgProps) {
  const setter: SvgProps = {
    set source(value: string) {
      widget.load(getSvgSource(value));
    },
  };

  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
