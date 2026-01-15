/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropertyName } from '@cervisebas/nodegui-plugin-animation';
import { ViewBaseProps } from '@cervisebas/react-nodegui/dist/interfaces/ViewBaseProps';
import { RNAnimated } from '../scripts/RNAnimated';
import { ReactNodeGuiTag } from '../types/ReactNodeGuiTag';

type PropsFromTag<T extends ReactNodeGuiTag<any>> =
  T extends ReactNodeGuiTag<infer P> ? P : never;

export interface AnimatedProps<
  T extends ReactNodeGuiTag<any>,
> extends ViewBaseProps<RNAnimated<T>> {
  target: T;
  propertyName: PropertyName;
  targetProps?: PropsFromTag<T>;

  duration: number;
  startValue: string | number;
  keyValueAt: [number, number | string];
  endValue: string | number;
  autoInit?: boolean;
}
