import React, { useRef, useState } from "react";
import { View, Window, Text, Button, Image, toPixmapFile, Dialog, RNWindow, RNButton, StyleSheet } from "@cervisebas/react-nodegui";
import IconAsset from "./assets/nodegui.png";
import { QIcon, QRect } from "@nodegui/nodegui";
import { QPropertyAnimation } from "@cervisebas/nodegui-plugin-animation";
import { getRandomIntInclusive } from "./utils/random";

const winIcon = new QIcon(toPixmapFile(IconAsset));
const minSizeWindow = {
  width: 400,
  height: 480,
};

const sizeDialog = {
  width: 240,
  height: 120,
};

const texts = [
  'Mollit pariatur sunt adipisicing nulla sunt mollit occaecat aute enim in labore ut voluptate.',
  'Eu aliqua et cupidatat sit pariatur do dolor exercitation minim duis occaecat commodo.',
  'Labore consequat aute irure consectetur veniam esse esse culpa amet elit elit ipsum Lorem adipisicing.',
  'Labore quis amet cillum magna nostrud.',
];

export function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [windowSize, setWindowSize] = useState('0x0');
  const [subtitle, setSubtitle] = useState(texts[0]);

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
        windowTitle={process.title}
      >
        <View style={styles.container}>
          <Image
            src={IconAsset}
            style={styles.logo}
            size={{
              width: 100,
              height: 100,
            }}
          />

          <Text style={styles.title}>
            React NodeGUI!
          </Text>
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>

          <View style={styles.button_container}>
            <Button
              style={styles.button}
              text={'Cambiar texto'}
              on={{
                clicked() {
                  setSubtitle(texts[getRandomIntInclusive(0, texts.length - 1)]);
                },
              }}
            />
            <Button
              style={styles.button}
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
        on={{
          Close() {
            console.log('-> Close dialog');
            setShowDialog(false);
          },
        }}
      >
        <View style={dialogStyles.container}>
          <Text style={dialogStyles.title}>Tamaño: {windowSize}</Text>
        </View>
      </Dialog>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: '20px',
  },
  button_container: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    paddingTop: '12px',
  },
  subtitle: {
    color: '#494949',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingTop: '6px',
  },
  logo: {
    width: '100px',
    height: '100px',
  },
  button: {
    marginTop: '4px',
    minHeight: '26px',
    paddingLeft: '6px',
    paddingRight: '6px',
  },
});

const dialogStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
});
