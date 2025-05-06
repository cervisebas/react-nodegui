import { QWidgetSignals } from "@nodegui/nodegui";
import { ComponentConfig } from "../../classes/ComponentConfig";
import { RNView, ViewRef } from "./scripts/RNView";
import { registerComponent } from "../../utils/component.config";
import { ViewProps } from "./interface/ViewProps";

class ViewConfig extends ComponentConfig<ViewProps<QWidgetSignals>, RNView> {
  tagName = RNView.tagName;
  
  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: ViewProps<QWidgetSignals>) {
    const widget = new RNView();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNView, newProps: ViewProps<QWidgetSignals>) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNView, _updatePayload: never, oldProps: ViewProps<QWidgetSignals>, newProps: ViewProps<QWidgetSignals>) {
    instance.setProps(newProps, oldProps);
  }
}

export const View = registerComponent<ViewProps<QWidgetSignals>>(
  new ViewConfig(),
);

export { RNView, ViewRef };
