import {
  Button,
  CheckBox,
  GridColumn,
  GridRow,
  GridView,
  StyleSheet,
  Text,
  View,
} from '@cervisebas/react-nodegui';
import { useState } from 'react';

export function ButtonScreen() {
  const [flat, setFlat] = useState<boolean>(false);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Button Example</Text>

      <View style={styles.componentContent}>
        <Button text="Click Me!" flat={flat} />
      </View>

      <Text
        style={[
          styles.title,
          {
            marginTop: 16,
          },
        ]}
      >
        Button options
      </Text>

      <GridView verticalSpacing={4}>
        {/* ##### flat ##### */}
        <GridRow>
          <GridColumn>
            <CheckBox
              checked={flat}
              on={{
                toggled(checked) {
                  setFlat(checked);
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>Flat</Text>
          </GridColumn>
        </GridRow>
      </GridView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingTop: 16,
  },
  componentContent: {
    flexDirection: 'row',
  },
  itemOptionText: {
    fontSize: '12px',
    marginLeft: 6,
  },
});
