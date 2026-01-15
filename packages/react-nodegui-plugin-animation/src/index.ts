/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX } from 'react';
import { ComponentConfig } from './classes/ComponentConfig';
import { RNComponent } from './classes/RNComponent';
import { AnimatedProps } from './interfaces/AnimatedProps';
import { RNAnimated } from './scripts/RNAnimated';
import { ReactNodeGuiTag } from './types/ReactNodeGuiTag';
import { registerComponent } from '@cervisebas/react-nodegui';

class AnimatedConfig<T extends ReactNodeGuiTag<any>> extends ComponentConfig<
  AnimatedProps<T>
> {
  tagName = RNAnimated.tagName;

  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: AnimatedProps<T>) {
    const widget = new RNAnimated();
    widget.setProps(newProps, {} as never);
    return widget;
  }

  commitUpdate(
    instance: RNComponent,
    _updatePayload: never,
    oldProps: AnimatedProps<T>,
    newProps: AnimatedProps<T>,
  ) {
    instance.setProps(newProps, oldProps);
  }
}

export const Animated = registerComponent(new AnimatedConfig()) as <
  T extends ReactNodeGuiTag<any>,
>(
  props: AnimatedProps<T>,
) => JSX.Element;
export { RNAnimated };
export { AnimatedNative } from './scripts/RNAnimated';
export { AnimatedInstance } from './instances/AnimatedInstance';
