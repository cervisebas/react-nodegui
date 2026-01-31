import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import { RNStackedLayout, StackedLayout } from "../StackedLayout";
import { StackScreen, StackScreenProps } from "../StackScreen";
import { StackNavigationHistory } from "./interfaces/StackNavigationHistory";
import { StackedLayoutProps } from "../StackedLayout/interfaces/StackedLayoutProps";

export interface StackNavigationProps extends StackedLayoutProps {
  initScreen?: string;
  children: React.ReactNode;
}

export interface StackNavigationRef {
  navigateTo(index: number, resetHistory?: boolean): void;
  navigateTo(index: string, resetHistory?: boolean): void;
  getIndex(): number;
  getIndexName(): string;
  goBack(): void;
}

export const StackNavigation = forwardRef(function StackNavigation(props: StackNavigationProps, ref: React.Ref<StackNavigationRef>) {
  const [indexString, setIndexString] = useState(props.initScreen || '');
  const refStackedLayout = useRef<RNStackedLayout>(null);
  const history = useRef<StackNavigationHistory[]>([]);

  const screenNames = useMemo(() => {
    const components = React.Children.toArray(props.children).filter(
      (component) => React.isValidElement(component)
    ) as React.ReactElement<StackScreenProps>[];

    return components.map(component => component.props.name);
  }, [props.children]); 

  const screens = useMemo(() => {
    return React.Children.toArray(props.children).filter(
      (component) => (
        React.isValidElement(component) &&
        component.type === StackScreen
      )
    );
  }, [props.children]);

  useImperativeHandle(ref, () => ({
    navigateTo(index, resetHistory) {
      if (resetHistory) {
        history.current = [];
      }

      if (typeof index === 'number') {
        const screenName = screenNames[index];

        setIndexString(screenName);
        history.current.push({
          name: screenName,
          index: index,
        });
        refStackedLayout.current?.goToIndex(index);
      } else {
        const screenIndex = screenNames.indexOf(index);

        setIndexString(index);
        history.current.push({
          name: index,
          index: screenIndex,
        });
        refStackedLayout.current?.goToPage(index);
      }
    },
    getIndex() {
      return screenNames.indexOf(indexString);
    },
    getIndexName() {
      return indexString;
    },
    goBack() {
      if (history.current.length < 1) {
        return;
      }

      history.current.splice(-1, 1);
      const [backScreen] = history.current.splice(-1, 1);

      if (backScreen) {
        this.navigateTo(backScreen.index, undefined);
      }
    },
  }));

  return (
    <StackedLayout {...props} initialName={indexString} ref={refStackedLayout}>
      {screens}
    </StackedLayout>
  );
});
