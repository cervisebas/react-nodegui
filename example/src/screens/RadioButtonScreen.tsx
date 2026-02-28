import { RadioButton, StyleSheet, Text, View } from '@cervisebas/react-nodegui';
import { useState } from 'react';

const OPTIONS = [
  {
    label: 'Option 1',
    value: 1,
  },
  {
    label: 'Option 2',
    value: 2,
  },
  {
    label: 'Option 3',
    value: 3,
  },
  {
    label: 'Option 4',
    value: 4,
  },
];

export function RadioButtonScreen() {
  const [checkedValue, setCheckedValue] = useState(1);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>RadioButton Example</Text>

      <View style={styles.componentContent}>
        {OPTIONS.map((item) => (
          <RadioButton
            key={`option-${item.value}`}
            text={item.label}
            checked={checkedValue === item.value}
            on={{
              toggled(isChecked) {
                if (isChecked) {
                  setCheckedValue(item.value);
                }
              },
            }}
          />
        ))}
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
    flexDirection: 'column',
  },
  itemOptionText: {
    fontSize: '12px',
    marginLeft: 6,
  },
});
