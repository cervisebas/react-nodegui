import {
  CheckBox,
  ComboBox,
  GridColumn,
  GridRow,
  GridView,
  StyleSheet,
  Text,
  View,
} from '@cervisebas/react-nodegui';
import { InsertPolicy } from '@nodegui/nodegui';
import { useState } from 'react';

const ITEMS = [
  { text: 'Item 1' },
  { text: 'Item 2' },
  { text: 'Item 3' },
  { text: 'Item 4' },
  { text: 'Item 5' },
];

export function ComboBoxScreen() {
  const [editable, setEditable] = useState<boolean>(false);
  const [duplicatesEnabled, setDuplicatesEnabled] = useState<boolean>(false);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>ComboBox Example</Text>

      <View style={styles.componentContent}>
        <ComboBox
          items={ITEMS}
          editable={editable}
          duplicatesEnabled={duplicatesEnabled}
          insertPolicy={InsertPolicy.InsertAtBottom}
        />
      </View>

      <Text
        style={[
          styles.title,
          {
            marginTop: 16,
          },
        ]}
      >
        ComboBox options
      </Text>

      <GridView verticalSpacing={4}>
        {/* ##### editable ##### */}
        <GridRow>
          <GridColumn>
            <CheckBox
              checked={editable}
              on={{
                toggled(checked) {
                  setEditable(checked);
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>Editable</Text>
          </GridColumn>
        </GridRow>

        {/* ##### duplicatesEnabled ##### */}
        <GridRow>
          <GridColumn>
            <CheckBox
              checked={duplicatesEnabled}
              on={{
                toggled(checked) {
                  setDuplicatesEnabled(checked);
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>
              Duplicates Enabled (when editable)
            </Text>
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
