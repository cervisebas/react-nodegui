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
      <Window>
        <View
          style={{
            flex: 1,
            minHeight: '100%',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
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

Renderer.render(<App />);
