import { QWidget, WindowState, CursorShape, QCursor, QIcon } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { Geometry } from "../types/Geometry";
import { WidgetAttributesMap } from "../interface/WidgetAttributesMap";
import { WindowFlagsMap } from "../interface/WindowFlagsMap";
import { Size, ViewSize, Position } from "../types/Size";
import { WidgetEventListeners } from "../types/WidgetEventListeners";

export function setViewProps<Signals extends object>(widget: QWidget<never>, newProps: ViewBaseProps<Signals>, oldProps: ViewBaseProps<Signals>) {
  const setter: ViewBaseProps<Signals> = {
    set visible(shouldShow: boolean) {
      if (shouldShow) {
        widget.show();
      } else {
        widget.hide();
      }
    },
    set styleSheet(styleSheet: string) {
      widget.setStyleSheet(styleSheet);
    },
    set style(inlineStyle: string) {
      if (newProps.styleSheet) {
        console.warn("Both styleSheet and inlineStyle can't be used together");
      }
      widget.setInlineStyle(inlineStyle);
    },
    set geometry(geometry: Geometry) {
      widget.setGeometry(geometry.x, geometry.y, geometry.width, geometry.height);
    },
    set id(id: string) {
      widget.setObjectName(id);
    },
    set mouseTracking(isMouseTracked: boolean) {
      widget.setMouseTracking(isMouseTracked);
    },
    set enabled(enable: boolean) {
      widget.setEnabled(enable);
    },
    set windowOpacity(opacity: number) {
      widget.setWindowOpacity(opacity);
    },
    set windowTitle(title: string) {
      widget.setWindowTitle(title);
    },
    set windowState(state: WindowState) {
      widget.setWindowState(state);
    },
    set cursor(cursor: CursorShape | QCursor) {
      widget.setCursor(cursor);
    },
    set windowIcon(icon: QIcon) {
      widget.setWindowIcon(icon);
    },
    set minSize(size: Size) {
      widget.setMinimumSize(size.width, size.height);
    },
    set maxSize(size: Size) {
      widget.setMaximumSize(size.width, size.height);
    },
    set size(size: ViewSize) {
      if (size.fixed) {
        widget.setFixedSize(size.width, size.height);
      } else {
        const minSize = newProps.minSize || { width: 0, height: 0 };
        const maxSize = newProps.maxSize || {
          width: 16777215,
          height: 16777215,
        };
        widget.setMinimumSize(minSize.width, minSize.height);
        widget.setMaximumSize(maxSize.width, maxSize.height);
        widget.resize(size.width, size.height);
      }
    },
    set pos(position: Position) {
      widget.move(position.x, position.y);
    },
    set on(listenerMap: Partial<WidgetEventListeners | Signals>) {
      const listenerMapLatest = Object.assign({}, listenerMap) as Record<string, never>;
      const oldListenerMap = Object.assign({}, oldProps.on);
      Object.entries(oldListenerMap).forEach(([eventType, oldEvtListener]) => {
        const newEvtListener = listenerMapLatest[eventType];
        if (oldEvtListener !== newEvtListener) {
          widget.removeEventListener(
            eventType as never,
            oldEvtListener,
          );
        } else {
          delete listenerMapLatest[eventType];
        }
      });

      Object.entries(listenerMapLatest).forEach(([eventType, newEvtListener]) => {
        widget.addEventListener(
          eventType as never,
          newEvtListener,
        );
      });
    },
    set attributes(attributesMap: WidgetAttributesMap) {
      Object.entries(attributesMap).forEach(([attribute, value]) => {
        widget.setAttribute(Number(attribute), value);
      });
    },
    set windowFlags(windowFlagsMap: WindowFlagsMap) {
      Object.entries(windowFlagsMap).forEach(([flag, value]) => {
        widget.setWindowFlag(Number(flag), value);
      });
    },
  };
  Object.assign(setter, newProps);
}