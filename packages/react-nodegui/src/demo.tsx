import React, { useEffect, useRef, useState } from "react";
import { Text, Renderer, Window, Button, View, Dialog } from ".";

function App() {
  const [counter, setCounter] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const interval = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCounter(v => ++v);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <React.Fragment>
      <Window styleSheet={styleSheet}>
        <View id={'container'}>
          <View id={'textContainer'}>
            <Text>Number {counter}</Text>
          </View>
          <View>
            <Button
              text={'Open dialog'}
              on={{
                clicked() {
                  setOpenDialog(true);
                },
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

const styleSheet = `
  #container {
    flex: 1;
    min-height: '100%';
    justify-content: 'center';
  }
  #textContainer {
    flex-direction: 'row';
    justify-content: 'space-around';
    align-items: 'center';
  }
`;

Renderer.render(<App />);
