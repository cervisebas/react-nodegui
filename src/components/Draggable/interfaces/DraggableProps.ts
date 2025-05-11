import { ViewProps } from "../../View/interface/ViewProps";

export interface DraggableProps extends ViewProps<object> {
  onMove?: (x: number, y: number) => void;
  getWinPos?: () => {
    x: number;
    y: number;
  } | undefined;
}
