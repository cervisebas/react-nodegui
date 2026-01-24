import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { SvgProps } from "./interfaces/SvgProps";
import { RNSvg } from "./scripts/RNSvg";

class SvgConfig extends ComponentConfig<SvgProps, RNSvg> {
  tagName = RNSvg.tagName;

  shouldSetTextContent() {
    return true;
  }

  createInstance(newProps: SvgProps) {
    const widget = new RNSvg();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNSvg, newProps: SvgProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  finalizeInitialChildren() {
    return true;
  }

  commitUpdate(instance: RNSvg, updatePayload: never, oldProps: SvgProps, newProps: SvgProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Svg = registerComponent<SvgProps>(new SvgConfig());
export { RNSvg };
export { SvgNative } from "./scripts/RNSvg";
