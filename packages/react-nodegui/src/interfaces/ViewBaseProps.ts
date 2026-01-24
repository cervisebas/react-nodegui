import { CursorShape, QCursor, QIcon, WindowState } from "@nodegui/nodegui";
import { Geometry } from "../components/View/types/Geometry";
import { RNProps } from "./RNProps";
import { Size, ViewSize, Position } from "../components/View/types/Size";
import { WidgetEventListeners } from "../components/View/types/WidgetEventListeners";
import { WidgetAttributesMap } from "../components/View/interface/WidgetAttributesMap";
import { WindowFlagsMap } from "../components/View/interface/WindowFlagsMap";
import React from "react";

export interface ViewBaseProps<Signals extends object> extends RNProps {
  /**
   * Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetshow)
   */
  visible?: boolean;
  /**
   * Sets the property that holds the widget's style sheet. [QWidget: setStyleSheet](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetstylesheetstylesheet)
   */
  styleSheet?: string;
  /**
   * Sets the inline stylesheet property. [QWidget: setInlineStyle](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetinlinestylestyle)
   */
  style?: string;
  /**
   * Sets the screen position as well as size of the widget. [QWidget: setGeometry](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetgeometryx-y-width-height)
   */
  geometry?: Geometry;
  /**
   * Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetobjectnameobjectname)
   */
  id?: string;
  /**
   * Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetmousetrackingismousetracked)
   */
  mouseTracking?: boolean;
  /**
   * Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetenabledenabled)
   */
  enabled?: boolean;
  /**
   * This property holds the level of opacity for the window. [QWidget: setWindowOpacity](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetwindowopacityopacity)
   */
  windowOpacity?: number;
  /**
   * Sets the window title property. [QWidget: setWindowTitle](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetwindowtitletitle)
   */
  windowTitle?: string;
  /**
   * Sets the window state. [QWidget: setWindowState](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetwindowstatestate)
   */
  windowState?: WindowState;
  /**
   * Sets the window mouse cursor. [QWidget: setCursor](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetcursorcursor)
   */
  cursor?: CursorShape | QCursor;
  /**
   * Sets the window icon. [QWidget: setWindowIcon](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetwindowiconicon)
   */
  windowIcon?: QIcon;
  /**
   * Sets the minimum size of the widget. [QWidget: setMinimumSize](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetminimumsizewidth-height)
   */
  minSize?: Size;
  /**
   * Sets the maximum size of the widget. [QWidget: setMaximumSize](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetmaximumsizewidth-height)
   */
  maxSize?: Size;
  /**
   * Sets both the minimum and maximum sizes of the widget. [QWidget: setFixedSize](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetfixedsizewidth-height)
   */
  size?: ViewSize;
  /**
   * Sets the screen position of the widget. [QWidget: move](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetmovex-y)
   */
  pos?: Position;
  /**
   * Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)
   */
  on?: Partial<WidgetEventListeners | Signals>;
  
  /**
   * Prop to set the Widget Attributes. example:
   * `<View attributes={{[WidgetAttributes.WA_Disabled]: true}} />`
   */
  attributes?: WidgetAttributesMap;

  /**
   * Prop to set the Widget flags. example:
   * `<View windowFlags={{[WindowType.SplashScreen]: true}} />`
   */
  windowFlags?: WindowFlagsMap;

  children?: React.ReactNode;
}