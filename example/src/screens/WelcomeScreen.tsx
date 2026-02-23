import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, useViewGeometry, View } from "@cervisebas/react-nodegui";
import IconAsset from "../assets/nodegui.png";
import { QPixmap } from '@nodegui/nodegui';
import { useSystemTheme } from '../hooks/useSystemTheme';
import { tintIcon } from '../utils/tintIcon';

export function WelcomeScreen() {
  const { theme } = useSystemTheme();
  const { viewHeight, viewWidth } = useViewGeometry();
  const [icon, setIcon] = useState(new QPixmap(IconAsset));

  useEffect(() => {
    console.log('aaaa');
    setIcon(tintIcon(IconAsset, theme.text));
  }, [theme]);

  return (
    <View
      style={[
        styles.container,
        {
          width: viewWidth,
          height: viewHeight,
        },
      ]}
    >
      <View style={styles.subcontainer}>
        <Image
          pixmap={icon}
          style={styles.logo}
          size={{
            width: 100,
            height: 100,
          }}
        />

        <Text style={[styles.title, { color: theme.text }]}>
          React NodeGUI!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    paddingTop: '12px',
  },
  logo: {
    width: '100px',
    height: '100px',
  },
});
