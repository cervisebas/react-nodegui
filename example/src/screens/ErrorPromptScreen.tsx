import {
  Button,
  ErrorPrompt,
  LineEdit,
  StyleSheet,
  View,
} from '@cervisebas/react-nodegui';
import { useState } from 'react';

export function ErrorPromptScreen() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('Test message');

  return (
    <View style={styles.content}>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <LineEdit
          text={text}
          placeholderText={'Message...'}
          on={{
            textChanged: setText,
          }}
          style={{
            height: 40,
          }}
        />

        <Button
          on={{
            clicked() {
              setVisible(true);
            },
          }}
          style={{
            width: 100,
            marginLeft: 8,
            height: 30,
          }}
        >
          Test
        </Button>
      </View>

      <ErrorPrompt
        message={text}
        open={visible}
        on={{
          Close() {
            if (visible) {
              setVisible(false);
            }
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingTop: 16,
  },
});
