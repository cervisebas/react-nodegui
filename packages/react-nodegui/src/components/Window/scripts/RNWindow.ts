import { NativeElement, QMainWindow, QMenuBar, QWidget } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { setWindowProps } from "../utils/setWindowProps";
import { WindowProps } from "../interface/WindowProps";

export type WindowNative = NativeElement & QMainWindow;

export class RNWindow extends QMainWindow implements RNWidget {
  native!: WindowNative;
  static tagName = "mainwindow";

  setProps(newProps: WindowProps, oldProps: WindowProps) {
    setWindowProps(this, newProps, oldProps);
  }
  
  removeChild(child: QWidget<never>) {
    const removedChild = this.takeCentralWidget();
    if (removedChild) {
      removedChild.close();
    }
    child.close();
  }
  
  appendInitialChild(child: QWidget<never> | QMenuBar) {
    if (child instanceof QMenuBar) {
      if (!this.menuBar()) {
        this.setMenuBar(child);
      } else {
        console.warn("MainWindow can't have more than one menubar.");
      }
      return;
    }

    if (!this.centralWidget()) {
      this.setCentralWidget(child);
    } else {
      console.warn("MainWindow can't have more than one child node");
    }
  }

  appendChild(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
  
  insertBefore(child: QWidget<never>) {
    this.appendInitialChild(child);
  }
}