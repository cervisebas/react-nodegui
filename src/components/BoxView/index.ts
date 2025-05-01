import { ComponentConfig } from "../../classes/ComponentConfig";
import { RNComponent } from "../../classes/RNComponent";
import { RNProps } from "../../interfaces/RNProps";
import { registerComponent } from "../../utils/component.config";
import { BoxViewProps } from "./interface/BoxViewProps";
import { RNBoxView } from "./scripts/RNBoxView";

class BoxViewConfig extends ComponentConfig<BoxViewProps, RNBoxView> {
  tagName = RNBoxView.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: BoxViewProps) {
    const widget = new RNBoxView();
    widget.setProps(newProps, {});
    return widget;
  }

  finalizeInitialChildren() {
    return true;
  }

  commitMount(instance: RNBoxView, newProps: BoxViewProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
  }

  commitUpdate(instance: RNComponent, _updatePayload: never, oldProps: RNProps, newProps: RNProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const BoxView = registerComponent<BoxViewProps>(new BoxViewConfig());