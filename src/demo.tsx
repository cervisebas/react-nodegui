import React, { useEffect, useRef, useState } from "react";
import { Text, Renderer, Window, Button, View } from ".";

function App() {
  const [counter, setCounter] = useState(0);
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
    <Window styleSheet={styleSheet}>
      <View id="container">
        <View id="textContainer">
          <Text>Number {counter}</Text>
        </View>
        <View>
          <Button text="Click me"></Button>
        </View>
      </View>
    </Window>
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
