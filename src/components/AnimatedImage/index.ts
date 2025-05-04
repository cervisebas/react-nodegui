import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { AnimatedImageProps } from "./interfaces/AnimatedImageProps";
import { RNAnimatedImage } from "./scripts/RNAnimatedImage";

class AnimatedImageConfig extends ComponentConfig<AnimatedImageProps, RNAnimatedImage> {
  tagName = RNAnimatedImage.tagName;

  shouldSetTextContent() {
    return true;
  }

  createInstance(newProps: AnimatedImageProps) {
    const widget = new RNAnimatedImage();
    widget.setProperty("scaledContents", true);
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNAnimatedImage, newProps: AnimatedImageProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNAnimatedImage, _updatePayload: never, oldProps: AnimatedImageProps, newProps: AnimatedImageProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const AnimatedImage = registerComponent<AnimatedImageProps>(
  new AnimatedImageConfig(),
);

export { RNAnimatedImage };
