/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatedProps } from '../interfaces/AnimatedProps';
import {
  PropertyName,
  QPropertyAnimation,
} from '@cervisebas/nodegui-plugin-animation';
import { RNAnimated } from './RNAnimated';
import { setViewProps } from './setViewProps';
import { ReactNodeGuiTag } from '../types/ReactNodeGuiTag';

export function setAnimatedProps<T extends ReactNodeGuiTag<any>>(
  widget: RNAnimated<T>,
  newProps: AnimatedProps<T>,
  oldProps: AnimatedProps<T>,
) {
  const setter: AnimatedProps<T> = {
    set target(target: T) {
      widget.target = target;
      widget.animated = new QPropertyAnimation();
      widget.animated.setTargetObject(target as never);
    },
    set targetProps(target: T extends ReactNodeGuiTag<infer P> ? P : never) {
      console.log(widget.target);
      //widget.target?.setProps(target, {});
    },
    set propertyName(value: PropertyName) {
      widget.animated?.setPropertyName(value);
    },
    set duration(ms: number) {
      widget.animated?.setDuration(ms);
    },
    set startValue(val: number | string) {
      widget.animated?.setStartValue(val);
    },
    set keyValueAt(val: [number, number | string]) {
      widget.animated?.setKeyValueAt(...val);
    },
    set endValue(val: number | string) {
      widget.animated?.setEndValue(val);
    },
    set autoInit(auto: boolean) {
      widget.autoInit = auto;
    },
  };

  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
