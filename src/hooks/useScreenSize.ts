import { QApplication } from "@nodegui/nodegui";
import { useRef, useState, useCallback, useEffect } from "react";

export function useScreenSize() {
  const screen = useRef(QApplication.primaryScreen());
  const available = useRef(screen.current?.geometry());

  const [width, setWidth] = useState(available.current?.width() ?? 0);
  const [height, setHeight] = useState(available.current?.height() ?? 0);

  const onResize = useCallback(() => {
    available.current = screen.current?.geometry();
    setWidth(available.current?.width() ?? 0);
    setHeight(available.current?.height() ?? 0);
  }, []);

  useEffect(() => {
    screen.current?.addEventListener('geometryChanged', onResize);

    return () => {
      screen.current?.removeEventListener('geometryChanged', onResize);
    };
  }, []);

  return {width, height};
}
