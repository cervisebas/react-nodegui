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
    Renderer.container = reconciler.createContainer(
      appContainer,
      0,
      null,
      false, // isStrictMode
      true, // isConcurrent
      'app-tag',
      console.error,
      null,
    );

    if (options && options.onInit) {
      options.onInit(reconciler);
    }

    reconciler.updateContainer(
      element,
      Renderer.container,
      null, // parentComponent
      options?.onRender as (() => void) | null | undefined
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).__REACT__ = React;
