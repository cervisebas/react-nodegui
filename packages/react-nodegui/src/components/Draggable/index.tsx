import React, { forwardRef, useState } from "react";
import { QPoint, QMouseEvent } from "@nodegui/nodegui";
import { NativeRawPointer } from "@nodegui/nodegui/dist/lib/core/Component";
import { RNView, View } from "../View";
import { DraggableProps } from "./interfaces/DraggableProps";

const Draggable = forwardRef((
  props: DraggableProps,
  ref: React.Ref<RNView>
) => {
  const [dragStart, setDragStart] = useState<QPoint | null>(null);

  const onMouseDown = (e?: NativeRawPointer<"QEvent">) => {
    const event = new QMouseEvent(e!);
    event.globalX();

    const winPos = props.getWinPos?.() ?? { x: 0, y: 0 };
    const subtract = new QPoint(
      event.globalX() - winPos.x,
      event.globalY() - winPos.y,
    );
    
    setDragStart(subtract);
  };

  const onMouseMove = (e?: NativeRawPointer<"QEvent">) => {
    if (!dragStart) return;

    const event = new QMouseEvent(e!);

    props.onMove?.(
      event.globalX() - dragStart.x(),
      event.globalY() - dragStart.y(),
    );
  };

  const onMouseUp = () => {
    setDragStart(null);
  };

  return (
    <View
      {...props}
      ref={ref}
      on={{
        MouseButtonPress: onMouseDown,
        MouseMove: onMouseMove,
        MouseButtonRelease: onMouseUp,
      }}
    />
  );
});

Draggable.displayName = "Draggable";

export { Draggable };