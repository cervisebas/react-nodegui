import {
  Action,
  Menu,
  StyleSheet,
  Text,
  useViewGeometry,
  View,
} from '@cervisebas/react-nodegui';
import { useState } from 'react';

const MANY_OPTIONS = [
  {
    label: `Checkable option`,
    checked: false,
    checkable: true,
  },
  {
    label: `Normal option`,
    checked: false,
    checkable: false,
  },
];

export function MenuScreen() {
  const { viewHeight, viewWidth } = useViewGeometry();
  const [options, setOptions] = useState(MANY_OPTIONS);

  return (
    <View
      style={[
        styles.content,
        {
          width: viewWidth,
          height: viewHeight,
        },
      ]}
    >
      <Text style={styles.title}>Menu & Action Example</Text>

      <Menu title={'Test menu'} style={styles.menu}>
        {options.map((option, index) => (
          <Action
            key={`test-menu-option-${index}`}
            text={option.label}
            checked={option.checked}
            checkable={option.checkable}
            on={{
              toggled(checked) {
                option.checked = checked;
                setOptions(options.slice());
              },
            }}
          />
        ))}
      </Menu>
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
    paddingLeft: 16,
    paddingTop: 16,
  },
  menu: {
    width: 240,
  },
});
