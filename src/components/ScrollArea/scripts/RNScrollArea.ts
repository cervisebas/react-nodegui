import { QScrollArea, QWidget } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { ScrollAreaProps } from "../interface/ScrollAreaProps";
import { setScrollAreaProps } from "../utils/setScrollAreaProps";

export class RNScrollArea extends QScrollArea implements RNWidget {
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
  
  appendInitialChild(child: QWidget<never>) {
    if (this.widget()) {
      console.warn("ScrollView can't have more than one child node");
      return;
    }
    this.setWidget(child);
  }
  
  appendChild(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
  
  insertBefore(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
}
