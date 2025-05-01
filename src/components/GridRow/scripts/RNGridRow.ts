import { Component } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { RNGridColumn } from "../../GridColumn/scripts/RNGridColumn";
import { GridRowProps } from "../interfaces/GridRowProps";
import { setGridRowProps } from "../utils/setGridRowProps";
import { updateDisplacedChildren } from "../../GridView/utils/updateDisplacedChildren";
import { DataWithOffset } from "../../GridView/interfaces/DataWithOffset";
import { RNGridView } from "../../GridView/scripts/RNGridView";
import { offsetForIndex } from "../../GridView/utils/offsetForIndex";

export class RNGridRow extends Component implements RNComponent {
  parentGrid?: RNGridView;
  latestProps?: GridRowProps;
  prevProps?: GridRowProps;
  childColumns: Array<DataWithOffset<RNGridColumn>> = [];
  rowIndex?: number;
  height?: number;

  setParentGridAndUpdateProps(parentGrid: RNGridView, index: number): void {
    this.parentGrid = parentGrid;
    this.rowIndex = index;
    setGridRowProps(
      this,
      parentGrid,
      this.latestProps ?? {},
      this.prevProps ?? {},
    );

    this.updateChildren();
  }

  updateChildren(startIndex = 0): void {
    updateDisplacedChildren<RNGridColumn, RNGridRow>(
      startIndex,
      this.childColumns as never,
      this,
      "width",
      "setParentRowAndUpdateProps"
    );
  }

  remove(): void {
    this.childColumns.forEach(({ data }) => data.remove());
  }

  /* RNComponent */

  setProps(newProps: GridRowProps, oldProps: GridRowProps): void {
    if (this.parentGrid) {
      setGridRowProps(this, this.parentGrid, newProps, oldProps);
    }

    this.latestProps = newProps;
    this.prevProps = oldProps;
  }
  appendInitialChild(child: RNGridColumn): void {
    this.appendChild(child);
  }
  appendChild(child: RNGridColumn): void {
    if (!(child instanceof RNGridColumn)) {
      throw new Error("GridColumn is the only supported child of GridRow");
    }

    const offset = offsetForIndex<RNGridColumn>(
      this.childColumns.length,
      this.childColumns as never,
      "width"
    );

    child.setParentRowAndUpdateProps(this, offset);

    this.childColumns.push({
      offset,
      data: child,
    });
  }
  insertBefore(child: RNGridColumn, beforeChild: RNGridColumn): void {
    const prevIndex = this.childColumns.findIndex(
      ({ data }) => data === beforeChild
    );

    if (prevIndex === -1) {
      throw new Error(
        "Attempted to insert child GridColumn before nonexistent column"
      );
    }

    const offset = offsetForIndex<RNGridColumn>(
      prevIndex,
      this.childColumns as never,
      "width"
    );

    this.childColumns.splice(prevIndex, 0, {
      offset,
      data: child,
    });
    // Update displaced children
    this.updateChildren(prevIndex);
  }
  removeChild(child: RNGridColumn): void {
    const prevIndex = this.childColumns.findIndex(({ data }) => data === child);

    if (prevIndex !== -1) {
      this.childColumns.splice(prevIndex, 1);
      this.updateChildren(prevIndex);
    }

    // Actually remove child from layout
    child.remove();
    child.parentRow = undefined;
  }
  static tagName: string = "gridrow";
}