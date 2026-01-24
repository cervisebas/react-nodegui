import { QMainWindow } from "@nodegui/nodegui";

export function toDpi(getWin: () => QMainWindow) {
  return (val: string | number) => {
    const window = getWin();
    val = Number(val);
    
    const windowHandle = window.windowHandle();
    if (!windowHandle) {
      console.error('Error to get windowHandle.');
      return null;
    }
    
    const screen = windowHandle.screen();
    if (!screen) {
      console.error('Error to get screen.');
      return null;
    }

    return val * (screen.logicalDotsPerInch() / 160);
  };
}
