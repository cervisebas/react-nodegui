import { QObject, QSystemTrayIcon } from "@nodegui/nodegui";

export function shouldIgnoreChild(child: QObject<never>) {
  return child instanceof QSystemTrayIcon;
}