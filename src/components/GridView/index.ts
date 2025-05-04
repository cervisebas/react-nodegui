import { ComponentConfig } from "../../classes/ComponentConfig";
import { RNGridView } from "./scripts/RNGridView";
import { GridViewProps } from "./interfaces/GridViewProps";
import { registerComponent } from "../../utils/component.config";

class GridViewConfig extends ComponentConfig<GridViewProps, RNGridView> {
  tagName = RNGridView.tagName;
  
  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: GridViewProps) {
    const widget = new RNGridView();
    widget.setProps(newProps, {
      children: [],
    });
    return widget;
  }

  finalizeInitialChildren() {
    return true;
  }

  commitMount(instance: RNGridView, newProps: GridViewProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
  }

  commitUpdate(instance: RNGridView, _updatePayload: never, oldProps: GridViewProps, newProps: GridViewProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const GridView = registerComponent<GridViewProps>(new GridViewConfig());
export { RNGridView };
