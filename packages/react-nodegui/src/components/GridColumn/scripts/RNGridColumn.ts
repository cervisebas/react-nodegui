import { Component, QWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { GridColumnProps } from "../interfaces/GridColumnProps";
import { setGridColumnProps } from "../utils/setGridColumnProps";
import { RNGridRow } from "../../GridRow/scripts/RNGridRow";

export class RNGridColumn extends Component implements RNComponent {
  static tagName: string = "gridcolumn";
  actualWidget?: QWidget<never>;
  parentRow?: RNGridRow;
  latestProps?: GridColumnProps;
  prevProps?: GridColumnProps;
  columnIndex?: number;
  width?: number;

  setParentRowAndUpdateProps(parentRow: RNGridRow, index: number): void {
    this.parentRow = parentRow;
    this.columnIndex = index;
    setGridColumnProps(
      this,
      parentRow,
      this.latestProps ?? {},
      this.prevProps ?? {}
    );
  }

  remove(): void {
    if (!this.actualWidget) {
      return;
    }

    this.parentRow?.parentGrid?.layout()?.removeWidget(this.actualWidget);
    this.actualWidget.close();
    this.actualWidget = undefined;
  }

  /* RNComponent */

  setProps(newProps: GridColumnProps, oldProps: GridColumnProps): void {
    if (this.parentRow) {
      setGridColumnProps(this, this.parentRow, newProps, oldProps);
    }

    this.latestProps = newProps;
    this.prevProps = oldProps;
  }
  appendInitialChild(child: QWidget<never>): void {
    if (this.actualWidget) {
      throw new Error("Grid column can have only one child");
    }
    this.actualWidget = child;
  }
  appendChild(child: QWidget<never>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: QWidget<never>): void {
    this.appendInitialChild(child);
  }
  removeChild(): void {
    this.remove();
  }
}