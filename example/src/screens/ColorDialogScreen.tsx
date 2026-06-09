import { useState } from 'react';
import { QColor } from '@nodegui/nodegui';
import {
  Button,
  ColorDialog,
  StyleSheet,
  Text,
  View,
} from '@cervisebas/react-nodegui';

export function ColorDialogScreen() {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState<QColor | undefined>(undefined);

  return (
    <View style={styles.content}>
      <Button
        on={{
          clicked() {
            setVisible(true);
          },
        }}
        style={{
          width: 100,
        }}
      >
        Pick Color
      </Button>

      <Text style={{ width: 400 }}>
        {color
          ? `Selected color: RGB(${color.red()}, ${color.green()}, ${color.blue()})`
          : ''}
      </Text>

      <ColorDialog
        open={visible}
        currentColor={color}
        on={{
          colorSelected(color) {
            setColor(color);
            setVisible(false);
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
