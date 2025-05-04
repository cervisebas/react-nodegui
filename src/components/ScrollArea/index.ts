import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { ScrollAreaProps } from "./interface/ScrollAreaProps";
import { RNScrollArea } from "./scripts/RNScrollArea";

class ScrollAreaConfig extends ComponentConfig<ScrollAreaProps, RNScrollArea> {
  tagName = RNScrollArea.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: ScrollAreaProps) {
    const widget = new RNScrollArea();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNScrollArea, newProps: ScrollAreaProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNScrollArea, _updatePayload: never, oldProps: ScrollAreaProps, newProps: ScrollAreaProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const ScrollArea = registerComponent<ScrollAreaProps>(
  new ScrollAreaConfig(),
);

export { RNScrollArea };
