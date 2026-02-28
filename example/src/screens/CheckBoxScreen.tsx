import { CheckBox, StyleSheet, Text, View } from '@cervisebas/react-nodegui';
import { useState } from 'react';

export function CheckBoxScreen() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>CheckBox Example</Text>

      <View style={styles.componentContent}>
        <CheckBox
          text="I agree to the terms and conditions"
          checked={checked}
          on={{
            toggled(isChecked) {
              setChecked(isChecked);
            },
          }}
        />
      </View>
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
});
