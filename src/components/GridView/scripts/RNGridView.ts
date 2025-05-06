import { NativeElement, QGridLayout, QWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { GridViewProps } from "../interfaces/GridViewProps";
import { RNGridRow } from "../../GridRow/scripts/RNGridRow";
import { DataWithOffset } from "../interfaces/DataWithOffset";
import { offsetForIndex } from "../utils/offsetForIndex";
import { updateDisplacedChildren } from "../utils/updateDisplacedChildren";
import { setGridViewProps } from "../utils/setGridViewProps";

export type GridViewRef = NativeElement & QGridLayout;

export class RNGridView extends QWidget implements RNComponent {
  native!: GridViewRef;
  initialProps?: GridViewProps;
  childRows: Array<DataWithOffset<RNGridRow>> = [];

  layout() {
    return super.layout() as QGridLayout;
  }

  setLayout(layout: QGridLayout): void {
    super.setLayout(layout);
  }

  updateChildren(startIndex = 0): void {
    updateDisplacedChildren<RNGridRow, RNGridView>(
      startIndex,
      this.childRows as never,
      this,
      "height",
      "setParentGridAndUpdateProps"
    );
  }

  /* RNComponent */

  setProps(newProps: GridViewProps, oldProps: GridViewProps): void {
    if (this.layout()) {
      setGridViewProps(this, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
  }
  appendInitialChild(child: RNGridRow): void {
    this.appendChild(child);
  }
  appendChild(child: RNGridRow): void {
    if (!(child instanceof RNGridRow)) {
      throw new Error("GridRow is the only supported child of GridView");
    }

    const updateChild = () => {
      const offset = offsetForIndex<RNGridRow>(
        this.childRows.length,
        this.childRows as never,
        "height"
      );

      child.setParentGridAndUpdateProps(this, offset);

      this.childRows.push({
        offset,
        data: child,
      });
    };

    if (this.layout()) {
      updateChild();

      return;
    }

    const layout = new QGridLayout();
    this.setLayout(layout);

    // Newly created layout, so set initial props
    if (this.initialProps) {
      setGridViewProps(this, this.initialProps, {});
    }

    updateChild();
  }
  insertBefore(child: RNGridRow, beforeChild: RNGridRow): void {
    const prevIndex = this.childRows.findIndex(
      ({ data }) => data === beforeChild
    );

    if (prevIndex === -1) {
      throw new Error(
        "Attempted to insert child GridRow before nonexistent row"
      );
    }

    const offset = offsetForIndex<RNGridRow>(
      prevIndex,
      this.childRows as never,
      "height"
    );

    this.childRows.splice(prevIndex, 0, {
      offset,
      data: child,
    });
    // Update displaced children
    this.updateChildren(prevIndex);
  }
  removeChild(child: RNGridRow): void {
    const prevIndex = this.childRows.findIndex(({ data }) => data === child);

    if (prevIndex !== -1) {
      this.childRows.splice(prevIndex, 1);
      this.updateChildren(prevIndex);
    }

    child.remove();
    child.parentGrid = undefined;
  }
  static tagName: string = "gridview";
}