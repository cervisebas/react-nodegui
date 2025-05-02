import { QIcon, QSystemTrayIconSignals } from "@nodegui/nodegui";
import { WidgetEventListeners } from "../../View/types/WidgetEventListeners";
import { SystemTrayIconProps } from "../interfaces/SystemTrayIconProps";
import { RNSystemTrayIcon } from "../scripts/RNSystemTrayIcon";

export function setSystemTrayIconProps(
  widget: RNSystemTrayIcon,
  newProps: SystemTrayIconProps,
  oldProps: SystemTrayIconProps
) {
  const setter: SystemTrayIconProps = {
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    },
    set id(id: string) {
      widget.setObjectName(id);
    },
    set on(
      listenerMap: Partial<WidgetEventListeners | QSystemTrayIconSignals>
    ) {
      const listenerMapLatest = Object.assign({}, listenerMap) as Record<string, never>;
      const oldListenerMap = Object.assign({}, oldProps.on);
      Object.entries(oldListenerMap).forEach(([eventType, oldEvtListener]) => {
        const newEvtListener = listenerMapLatest[eventType];
        if (oldEvtListener !== newEvtListener) {
          widget.removeEventListener(eventType as never, oldEvtListener as never);
        } else {
          delete listenerMapLatest[eventType];
        }
      });

      Object.entries(listenerMapLatest).forEach(
        ([eventType, newEvtListener]) => {
          widget.addEventListener(eventType as never, newEvtListener);
        }
      );
    },
    set tooltip(tooltip: string) {
      widget.setToolTip(tooltip);
    },
    set visible(shouldShow: boolean) {
      if (shouldShow) {
        widget.show();
      } else {
        widget.hide();
      }
    },
  };
  Object.assign(setter, newProps);
}
