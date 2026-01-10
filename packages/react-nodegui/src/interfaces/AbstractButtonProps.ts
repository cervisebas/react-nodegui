import { QAbstractButtonSignals, QIcon, QSize } from "@nodegui/nodegui";
import { ViewBaseProps } from "./ViewBaseProps";

export interface AbstractButtonProps<Signals extends QAbstractButtonSignals>
  extends ViewBaseProps<Signals> {
  /**
   * Alternative method of providing the button text
   */
  children?: string;
  /**
   * Sets the given text to the button. [QPushButton: setText](https://docs.nodegui.org/docs/api/generated/classes/QPushButton#buttonsettexttext)
   */
  text?: string;
  /**
   * Sets an icon in the button. [QPushButton: setIcon](https://docs.nodegui.org/docs/api/generated/classes/QPushButton#buttonseticonicon)
   */
  icon?: QIcon;
  /**
   * Sets an icon size in the button. [QPushButton: setIconSize](https://docs.nodegui.org/docs/api/generated/classes/QPushButton#buttonseticonsize)
   */
  iconSize?: QSize;
}