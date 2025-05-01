import { AspectRatioMode, QPixmap, TransformationMode } from "@nodegui/nodegui";
import { ImageProps } from "../interface/ImageProps";
import { getLoadedPixmap } from "./getLoadedPixmap";
import { setTextProps } from "../../Text/utils/setTextProps";
import { RNImage } from "../scripts/RNImage";

export const setImageProps = (
  widget: RNImage,
  newProps: ImageProps,
  oldProps: ImageProps
) => {
  const setter: ImageProps = {
    set src(imageUrlOrPath: string) {
      if (!imageUrlOrPath) {
        return;
      }
      getLoadedPixmap(imageUrlOrPath)
        .then((pixmap) => widget.setPixmap(pixmap))
        .catch(console.warn);
    },
    set buffer(imageBuffer: Buffer) {
      const pixMap = new QPixmap();
      pixMap.loadFromData(imageBuffer);
      widget.setPixmap(pixMap);
    },
    set aspectRatioMode(mode: AspectRatioMode) {
      widget.setAspectRatioMode(mode);
    },
    set transformationMode(mode: TransformationMode) {
      widget.setTransformationMode(mode);
    },
  };
  Object.assign(setter, newProps);
  setTextProps(widget, newProps, oldProps);
};
