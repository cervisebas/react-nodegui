import { NativeElement, QScrollArea, QWidget } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { ScrollAreaProps } from "../interface/ScrollAreaProps";
import { setScrollAreaProps } from "../utils/setScrollAreaProps";
import { CheckMountableComponent } from "../../../decorators/CheckMountableComponent";

export type ScrollAreaNative = NativeElement & QScrollArea;

export class RNScrollArea extends QScrollArea implements RNWidget {
  native!: ScrollAreaNative;
  static tagName = "scrollarea";
  
  setProps(newProps: ScrollAreaProps, oldProps: ScrollAreaProps) {
    setScrollAreaProps(this, newProps, oldProps);
  }
  
  removeChild(child: QWidget<never>) {
    const removedChild = this.takeWidget();
    if (removedChild) {
      removedChild.close();
    }
    child.close();
  }
  
  @CheckMountableComponent()
  appendInitialChild(child: QWidget<never>) {
    if (this.widget()) {
      console.warn("ScrollView can't have more than one child node");
      return;
    }
    this.setWidget(child);
  }
  
  @CheckMountableComponent()
  appendChild(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
  
  @CheckMountableComponent()
  insertBefore(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
}
