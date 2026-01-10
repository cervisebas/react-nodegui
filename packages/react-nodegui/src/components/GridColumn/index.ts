import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { GridColumnProps } from "./interfaces/GridColumnProps";
import { RNGridColumn } from "./scripts/RNGridColumn";

class GridColumnConfig extends ComponentConfig<GridColumnProps, RNGridColumn> {
  tagName = RNGridColumn.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: GridColumnProps) {
    const widget = new RNGridColumn(null!);
    widget.setProps(newProps, newProps);
    return widget;
  }

  finalizeInitialChildren() {
    return true;
  }

  commitMount() {
    return;
  }
  
  commitUpdate(instance: RNGridColumn, _updatePayload: never, oldProps: GridColumnProps, newProps: GridColumnProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const GridColumn = registerComponent<GridColumnProps>(
  new GridColumnConfig(),
);