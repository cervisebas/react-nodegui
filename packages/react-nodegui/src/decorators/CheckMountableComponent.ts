import { QWidget } from "@nodegui/nodegui";
import { isMountable } from "../utils/isMountable";

export function CheckMountableComponent() {
  return function (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value as (child: QWidget<never>) => void;

    descriptor.value = function (child: QWidget<never>) {
      if (!isMountable(child)) {
        // child.show();
        return;
      }

      return originalMethod.apply(this, [child]);
    };

    return descriptor;
  }
}
