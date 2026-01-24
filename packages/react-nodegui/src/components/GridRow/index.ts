import { ComponentConfig } from "../../classes/ComponentConfig";
import { GridRowProps } from "./interfaces/GridRowProps";
import { RNGridRow } from "./scripts/RNGridRow";
import { registerComponent } from "../../utils/component.config";

class GridRowConfig extends ComponentConfig<GridRowProps, RNGridRow> {
  tagName = RNGridRow.tagName;
  
  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: GridRowProps) {
    const widget = new RNGridRow(null!);
    widget.setProps(newProps, newProps);
    return widget;
  }

  finalizeInitialChildren() {
    return true;
  }

  commitMount() {
    return;
  }

  commitUpdate(instance: RNGridRow, _updatePayload: never, oldProps: GridRowProps, newProps: GridRowProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const GridRow = registerComponent<GridRowProps>(new GridRowConfig());
