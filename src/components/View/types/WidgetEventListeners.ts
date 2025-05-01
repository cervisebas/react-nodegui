import { NativeRawPointer } from "@nodegui/nodegui/dist/lib/core/Component";
import { WidgetEventTypes } from "@nodegui/nodegui";

export type WidgetEventListeners = {
  [key in WidgetEventTypes]: (event?: NativeRawPointer<"QEvent">) => void;
};
