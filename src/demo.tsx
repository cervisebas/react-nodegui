import React, { useCallback, useState } from "react";
import { Text, Renderer, Window, Button, View, Dialog } from ".";

const ArrayTexts = [
  'Qui aliqua sit eiusmod officia non Lorem veniam.',
  'Veniam aliqua irure anim proident sint commodo exercitation qui adipisicing.',
  'Non ut reprehenderit excepteur nostrud dolor tempor.',
  'Labore amet occaecat ipsum ut nisi nisi esse incididunt dolor excepteur non excepteur aliquip minim.',
  'Aliqua anim est in ea pariatur eiusmod in sunt proident quis sint.',
  'Cupidatat nulla enim est anim eu velit voluptate magna commodo voluptate do.',
  'Et ea dolore laborum eiusmod enim occaecat incididunt excepteur.'
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

enum WindowSize {
  WIDTH = 800,
  HEIGHT = 600,
}

function App() {
  const [text, setText] = useState(ArrayTexts[0]);
  const [openDialog, setOpenDialog] = useState(false);

  const changeText = useCallback(() => {
    setText(ArrayTexts[getRandomInt(0, ArrayTexts.length - 1)]);
  }, []);

  return (
    <React.Fragment>
      <Window
        windowTitle={'Demo'}
        minSize={{
          width: WindowSize.WIDTH,
          height: WindowSize.HEIGHT,
        }}
      >
        <View
          style={{
            flex: 1,
            width: '100%',
            minHeight: '100%',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              paddingLeft: '20pt',
              paddingRight: '20pt',
            }}
          >
            <View
              style={{
                marginBottom: '30pt',
              }}
            >
              <Text>{text}</Text>
            </View>
            
            <Button
              text={'Open dialog'}
              on={{
                clicked() {
                  setOpenDialog(true);
                },
              }}
            />
            
            <Button
              text={'Change text'}
              on={{
                clicked: changeText,
              }}
            />
          </View>
        </View>
      </Window>

      <Dialog
        open={openDialog}
        on={{
          Close() {
            setOpenDialog(false);
          },
        }}
      >
        <View>
          <Text>Hello world!</Text>
        </View>
      </Dialog>
    </React.Fragment>
  );
};

Renderer.render(<App />);
