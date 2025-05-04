import { ComponentConfig } from "../../classes/ComponentConfig";
import { RNComponent } from "../../classes/RNComponent";
import { registerComponent } from "../../utils/component.config";
import { ActionProps } from "./interfaces/ActionProps";
import { RNAction } from "./scripts/RNAction";

class ActionConfig extends ComponentConfig<ActionProps> {
  tagName = RNAction.tagName;

  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: ActionProps) {
    const widget = new RNAction();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitUpdate(instance: RNComponent, _updatePayload: never, oldProps: ActionProps, newProps: ActionProps) {
    instance.setProps(newProps, oldProps);  
  }
}

export const Action = registerComponent<ActionProps>(new ActionConfig());
export { RNAction };
