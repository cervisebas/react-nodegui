import React, { createContext, forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { RNWindow, Window } from "../components/Window";
import { WindowProps } from "../components/Window/interface/WindowProps";

export const WindowContext = createContext({
  windowWidth: 0,
  windowHeight: 0,
});

export function useWindowGeometry() {
  return useContext(WindowContext);
}

export const WindowProvider = forwardRef(function WindowWithProvider(props: WindowProps, ref: React.Ref<RNWindow>) {
  const refWindow = useRef<RNWindow>(null);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const calculeWindowGeometry = useCallback(() => {
    const geometry = refWindow.current?.geometry();

    if (!geometry) {
      return;
    }

    setWindowWidth(geometry.width());
    setWindowHeight(geometry.height());
  }, []);

  useEffect(() => {
    calculeWindowGeometry();
  }, []);

  useImperativeHandle(ref, () => refWindow.current!);

  return (
    <WindowContext.Provider value={{windowWidth, windowHeight}}>
      <Window
        ref={refWindow}
        {...props}
        on={{
          ...(props?.on ?? {}),
          Resize(event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (props?.on as any)?.Resize?.(event);
            calculeWindowGeometry();
          },
        }}
      />
    </WindowContext.Provider>
  );
});
