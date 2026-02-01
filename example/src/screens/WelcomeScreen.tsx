import React from 'react';
import { Image, StyleSheet, Text, useViewGeometry, View } from "@cervisebas/react-nodegui";
import IconAsset from "../assets/nodegui.png";

export function WelcomeScreen() {
  const { viewHeight, viewWidth } = useViewGeometry();

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
          src={IconAsset}
          style={styles.logo}
          size={{
            width: 100,
            height: 100,
          }}
        />

        <Text style={styles.title}>
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
