import { Direction, NativeElement, QBoxLayout, QDialog, QWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { BoxViewProps } from "../interface/BoxViewProps";
import { setBoxViewProps } from "../utils/setBoxViewProps";

export type BoxViewNative = NativeElement & QBoxLayout;

export class RNBoxView extends QWidget implements RNComponent {
  native!: BoxViewNative;
  static tagName: string = "boxview";
  initialProps?: BoxViewProps;
  _children: Array<QWidget<never>> = [];

  layout() {
    return super.layout() as QBoxLayout;
  }

  setLayout(layout: QBoxLayout) {
    super.setLayout(layout);
  }

  setProps(newProps: BoxViewProps, oldProps: BoxViewProps): void {
    if (this.layout()) {
      setBoxViewProps(this, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
  }

  appendInitialChild(child: QWidget<never>): void {
    this.appendChild(child);
  }

  appendChild(child: QWidget<never>): void {
    if (child instanceof QDialog) {
      return;
    }
    const updateChild = () => {
      this.layout()?.addWidget(child);
      this._children.push(child);
    };

    if (this.layout()) {
      updateChild();

      return;
    }

    const layout = new QBoxLayout(Direction.LeftToRight);
    this.setLayout(layout);

    // Newly created layout, so set initial props
    if (this.initialProps) {
      setBoxViewProps(this, this.initialProps, {});
    }

    updateChild();
  }

  insertBefore(child: QWidget<never>, beforeChild: QWidget<never>): void {
    if (child instanceof QDialog) {
      return;
    }
    const prevIndex = this._children.indexOf(beforeChild);

    if (prevIndex === -1) {
      throw new Error(
        "Attempted to insert child Node before nonexistent child"
      );
    }

    this._children.splice(prevIndex, 0, child);
    this.layout()?.insertWidget(prevIndex, child);
  }

  removeChild(child: QWidget<never>): void {
    const prevIndex = this._children.indexOf(child);

    if (prevIndex !== -1) {
      this._children.splice(prevIndex, 1);
    }

    child.close();
  }
}