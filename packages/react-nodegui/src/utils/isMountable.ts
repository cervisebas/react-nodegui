import { QWidget } from "@nodegui/nodegui";

export function isMountable(child: QWidget<never>) {
  if ('mountable' in child) {
    return child.mountable as boolean;
  }

  return true;
}
