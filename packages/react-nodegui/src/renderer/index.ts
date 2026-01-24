import React from "react";
import { FiberRoot } from "react-reconciler";
import { RendererOptions } from "../interfaces/RendererOptions";
import reconciler, { appContainer } from "../reconciler";

export class Renderer {
  static container?: FiberRoot;

  static forceUpdate() {
    if (Renderer.container) {
      Renderer.container._reactInternalInstance = Renderer.container.current;
    }
  }
  static render(element: React.ReactNode, options?: RendererOptions) {
    const containerInfo = appContainer;
    const isConcurrent = true;
    const isStrictMode = false;

    const rendererOptions = Object.assign(
      {},
      {
        onInit: () => {},
        onRender: () => {},
      },
      options,
    );

    Renderer.container = reconciler.createContainer(
      containerInfo,
      0,
      null,
      isStrictMode,
      isConcurrent,
      'app-tag',
      console.error,
      null,
    );

    rendererOptions.onInit(reconciler);

    const parentComponent = null;
    reconciler.updateContainer(
      element,
      Renderer.container,
      parentComponent,
      function() {
        rendererOptions.onRender();
      },
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).__REACT__ = React;
