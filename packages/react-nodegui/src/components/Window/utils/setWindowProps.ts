import { QMenuBar } from "@nodegui/nodegui";
import { WindowProps } from "../interface/WindowProps";
import { setViewProps } from "../../View/utils/setViewProps";
import { RNWindow } from "../scripts/RNWindow";

export const setWindowProps = (
  window: RNWindow,
  newProps: WindowProps,
  oldProps: WindowProps,
) => {
  const setter: WindowProps = {
    set menuBar(menubar: QMenuBar) {
      window.setMenuBar(menubar);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(window, newProps, oldProps);
};
