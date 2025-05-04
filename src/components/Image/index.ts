import { WidgetEventTypes } from "@nodegui/nodegui";
import { ComponentConfig } from "../../classes/ComponentConfig";
import { ImageProps } from "./interface/ImageProps";
import { RNImage } from "./scripts/RNImage";
import { registerComponent } from "../../utils/component.config";

class ImageConfig extends ComponentConfig<ImageProps, RNImage> {
  tagName = RNImage.tagName;

  shouldSetTextContent() {
    return true;
  }
  
  createInstance(newProps: ImageProps) {
    const widget = new RNImage();
    widget.setProperty("scaledContents", true);
    widget.setProps(newProps, {});
    widget.addEventListener(WidgetEventTypes.Resize, () => {
      widget.scalePixmap(widget.size());
    });
    return widget;
  }

  commitMount(instance: RNImage, newProps: ImageProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNImage, _updatePayload: never, oldProps: ImageProps, newProps: ImageProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Image = registerComponent<ImageProps>(new ImageConfig());
export { RNImage };
