import { QFont, QIcon, QActionSignals, QKeySequence, ShortcutContext } from "@nodegui/nodegui";
import { ActionProps } from "../interfaces/ActionProps";
import { RNAction } from "../scripts/RNAction";

export const setActionProps = (
  widget: RNAction,
  newProps: ActionProps,
  oldProps: ActionProps
) => {
  const setter: ActionProps = {
    set checkable(isCheckable: boolean) {
      widget.setCheckable(isCheckable);
    },
    set checked(isChecked: boolean) {
      widget.setChecked(isChecked);
    },
    set enabled(isEnabled: boolean) {
      widget.setEnabled(isEnabled);
    },
    set font(font: QFont) {
      widget.setFont(font);
    },
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    },
    set id(id: string) {
      widget.setObjectName(id);
    },
    set on(listenerMap: Partial<QActionSignals>) {
      const listenerMapLatest = Object.assign({}, listenerMap) as Record<string, never>;
      const oldListenerMap = Object.assign({}, oldProps.on);
      Object.entries(oldListenerMap).forEach(([eventType, oldEvtListener]) => {
        const newEvtListener = listenerMapLatest[eventType];
        if (oldEvtListener !== newEvtListener) {
          widget.removeEventListener(
            eventType as never,
            oldEvtListener as never,
          );
        } else {
          delete listenerMapLatest[eventType];
        }
      });

      Object.entries(listenerMapLatest).forEach(
        ([eventType, newEvtListener]) => {
          widget.addEventListener(
            eventType as never,
            newEvtListener as never,
          );
        }
      );
    },
    set separator(isSeparator: boolean) {
      widget.setSeparator(isSeparator);
    },
    set shortcut(shortcut: QKeySequence) {
      widget.setShortcut(shortcut);
    },
    set shortcutContext(shortcutContext: ShortcutContext) {
      widget.setShortcutContext(shortcutContext);
    },
    set text(text: string) {
      widget.setText(text);
    },
  };
  Object.assign(setter, newProps);
};