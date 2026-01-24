/* eslint-disable @typescript-eslint/no-explicit-any */
import { QWidget, NativeElement } from '@nodegui/nodegui';
import { RNWidget } from '../classes/RNWidget';
import { AnimatedProps } from '../interfaces/AnimatedProps';
import { QPropertyAnimation } from '@cervisebas/nodegui-plugin-animation';
import { setAnimatedProps } from './setAnimatedProps';
import { ReactNodeGuiTag } from '../types/ReactNodeGuiTag';

export type AnimatedNative = NativeElement & QWidget;

export class RNAnimated<T extends ReactNodeGuiTag<any>>
  extends QWidget
  implements RNWidget
{
  native!: AnimatedNative;
  static tagName = 'animated';
  private _layout: QPropertyAnimation | null = null;
  public target?: T;
  public animated?: QPropertyAnimation;
  public autoInit = false;

  setProps(newProps: AnimatedProps<T>, oldProps: AnimatedProps<T>) {
    setAnimatedProps(this, newProps, oldProps);
  }

  appendChild() {
    throw new Error('Method not implemented.');
  }

  appendInitialChild(): void {
    throw new Error('Method not implemented.');
  }

  insertBefore(): void {
    throw new Error('Method not implemented.');
  }

  removeChild(): void {
    throw new Error('Method not implemented.');
  }
}
