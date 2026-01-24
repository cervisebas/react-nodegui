import React, { useRef, useState } from "react";
import { View, Window, Text, Button, Image, toPixmapFile, Dialog, RNWindow, RNButton } from "@cervisebas/react-nodegui";
import IconAsset from "./assets/nodegui.png";
import { QIcon, QRect } from "@nodegui/nodegui";
import { QPropertyAnimation } from "@cervisebas/nodegui-plugin-animation";

const winIcon = new QIcon(toPixmapFile(IconAsset));
const minSizeWindow = {
  width: 400,
  height: 480,
};

const sizeDialog = {
  width: 240,
  height: 120,
};

export function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [windowSize, setWindowSize] = useState('0x0');
  const refWindow = useRef<RNWindow>(null);
  const refButton = useRef<RNButton>(null);

  const buttonGeometry = useRef<[number, number, number, number] | null>(null);

  const handleClick = () => {
    try {
      const anim = new QPropertyAnimation();
      anim.setTargetObject(refButton.current as never);
      
      anim.setPropertyName("geometry");

      anim.setDuration(200);

      if (!buttonGeometry.current) {
        const originalGeometry = refButton.current?.geometry();
        buttonGeometry.current = [
          originalGeometry?.top() || 0,
          originalGeometry?.left() || 0,
          originalGeometry?.width() || 0,
          originalGeometry?.height() || 0,
        ];
      }

      const [top, left, width, height] = buttonGeometry.current;

      anim.setStartValue(new QRect(left, top, width, height));
      anim.setKeyValueAt(0.4, new QRect(left + 20, top, width, height));
      anim.setKeyValueAt(0.6, new QRect(left, top, width, height));
      anim.setKeyValueAt(0.8, new QRect(left - 20, top, width, height));
      anim.setEndValue(new QRect(left, top, width, height));
  
      //anim.setLoopCount(500);
      anim.onFinished(() => {
        console.log('-> Termino la animación.');

        const size = refWindow.current?.native.size();

        setWindowSize(`${size?.width()}x${size?.height()}`);
        setShowDialog(true);
      });
      anim.start();
    } catch (error) {
      console.error('Error ->', error);
    }
  };

  return (
    <React.Fragment>
      <Window
        ref={refWindow}
        minSize={minSizeWindow}
        windowIcon={winIcon}
        styleSheet={styleSheet}
        windowTitle={process.title}
      >
        <View id={'container'}>
          <Image
            id={'logo'}
            src={IconAsset}
            size={{
              width: 100,
              height: 100,
            }}
          />

          <Text id={'title'}>
            React NodeGUI!
          </Text>

          <View id={'button_container'}>
            <Button
              id={'button'}
              ref={refButton}
              text={'Ver tamaño de ventana'}
              on={{
                clicked() {
                  handleClick();
                },
              }}
            />
          </View>
        </View>
      </Window>

      <Dialog
        visible={showDialog}
        windowIcon={winIcon}
        windowTitle={'Test dialog'}
        size={sizeDialog}
        minSize={sizeDialog}
        maxSize={sizeDialog}
        styleSheet={dialogStyleSheet}
        on={{
          Close() {
            console.log('-> Close dialog');
            setShowDialog(false);
          },
        }}
      >
        <View id={'container'}>
          <Text id={'title'}>Tamaño: {windowSize}</Text>
        </View>
      </Dialog>
    </React.Fragment>
  );
}

const styleSheet = `
  #container {
    align-items: 'center';
    padding-top: 20px;
  }
  #button_container {
    padding-top: 20px;
  }
  #title {
    font-size: 24px;
    font-weight: bold;
    padding-top: 12px;
  }
  #logo {
    width: 100px;
    height: 100px;
  }
`;

const dialogStyleSheet = `
  #container {
    flex: 1;
    justify-content: 'center';
    align-items: 'center';
  }
  #title {
    font-size: 18px;
    font-weight: bold;
  }
`;
