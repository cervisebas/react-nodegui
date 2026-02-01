import { WindowProvider, toPixmapFile } from "@cervisebas/react-nodegui";
import IconAsset from "./assets/nodegui.png";
import { QIcon } from "@nodegui/nodegui";
import { BaseStackNavigation } from "./navigation/BaseStackNavigation";
import { Routers } from "./constants/routes";

const winIcon = new QIcon(toPixmapFile(IconAsset));
const minSizeWindow = {
  width: 1024,
  height: 576,
};

export function App() {
  return (
    <WindowProvider
      minSize={minSizeWindow}
      windowIcon={winIcon}
      windowTitle={process.title}
    >
      <BaseStackNavigation
        routers={Routers}
      />
    </WindowProvider>
  );
}
