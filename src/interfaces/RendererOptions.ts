import reconciler from "../reconciler";

export interface RendererOptions {
  onRender?: () => void;
  onInit?: (_reconciler: typeof reconciler) => void;
}