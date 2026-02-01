import React, { useState } from 'react';
import { StackNavigation, StackScreen, StyleSheet, View, ViewProvider } from '@cervisebas/react-nodegui';
import { LateralNavigation } from '../components/LateralNavigation/LateralNavigation';
import { Route } from '../interfaces/Route';
import { refStackNavigation } from '../utils/refs';

interface IProps {
  routers: Route[];
}

export function BaseStackNavigation(props: IProps) {
  const [currentRoute, setCurrentRoute] = useState('');

  return (
    <View style={styles.navigationContent}>
      <ViewProvider style={styles.stackContent}>
        <StackNavigation
          ref={refStackNavigation}
          style={styles.stackContent}
          onChangeScreen={setCurrentRoute}
        >
          {props.routers.map((route) => (
            <StackScreen
              key={`screen-${route.route}`}
              name={route.route}
              style={styles.stackContent}
            >
              <route.component />
            </StackScreen>
          ))}
        </StackNavigation>
      </ViewProvider>

      <LateralNavigation
        routes={props.routers}
        activeScreen={currentRoute}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stackContent: {
    flex: 1,
  },
  navigationContent: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});
