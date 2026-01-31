import React, { createContext, forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { WindowProps } from "../components/Window/interface/WindowProps";
import { RNView, View } from "../components/View";

export const ViewContext = createContext({
  viewWidth: 0,
  viewHeight: 0,
});

export function useViewGeometry() {
  return useContext(ViewContext);
}

export const ViewProvider = forwardRef(function WindowWithProvider(props: WindowProps, ref: React.Ref<RNView>) {
  const refView = useRef<RNView>(null);

  const [viewWidth, setViewWidth] = useState(0);
  const [viewHeight, setViewHeight] = useState(0);

  const calculeWindowGeometry = useCallback(() => {
    const geometry = refView.current?.geometry();

    if (!geometry) {
      return;
    }

    setViewWidth(geometry.width());
    setViewHeight(geometry.height());
  }, []);

  useEffect(() => {
    calculeWindowGeometry();
  }, []);

  useImperativeHandle(ref, () => refView.current!);

  return (
    <ViewContext.Provider value={{ viewWidth, viewHeight }}>
      <View
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={refView as any}
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
    </ViewContext.Provider>
  );
});
