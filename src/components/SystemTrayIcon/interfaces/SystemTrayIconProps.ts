import { QIcon, QSystemTrayIconSignals } from "@nodegui/nodegui";
import { RNProps } from "../../../interfaces/RNProps";
import { WidgetEventListeners } from "../../View/types/WidgetEventListeners";

export interface SystemTrayIconProps extends RNProps {
  /**
   * Sets an icon for the system tray. [QSystemTrayIcon: setIcon](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon#seticon)
   */
  icon?: QIcon | string;

  /**
   * Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetobjectnameobjectname)
   */
  id?: string;

  /**
   * Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)
   */
  on?: Partial<WidgetEventListeners | QSystemTrayIconSignals>;

  /**
   * Sets a tooltip for the system tray. [QSystemTrayIcon: setTooltip](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon#settooltip)
   */
  tooltip?: string;

  /**
   * Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetshow)
   */
  visible?: boolean;
}