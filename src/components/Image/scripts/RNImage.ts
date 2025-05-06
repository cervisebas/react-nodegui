import { QLabel, QPixmap, AspectRatioMode, TransformationMode, QSize, NativeElement } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { ImageProps } from "../interface/ImageProps";
import { setImageProps } from "../utils/setImageProps";

export type ImageNative = NativeElement & QLabel;

export class RNImage extends QLabel implements RNWidget {
  native!: ImageNative;
  static tagName = "image";
  
  originalPixmap?: QPixmap;
  aspectRatioMode?: AspectRatioMode;
  transformationMode?: TransformationMode;

  setProps(newProps: ImageProps, oldProps: ImageProps) {
    setImageProps(this, newProps, oldProps);
  }

  appendInitialChild() {
    throwUnsupported(this);
  }

  appendChild() {
    throwUnsupported(this);
  }

  insertBefore() {
    throwUnsupported(this);
  }

  removeChild() {
    throwUnsupported(this);
  }

  setPixmap(pixmap: QPixmap) {
    // react:✓
    super.setPixmap(pixmap);
    this.originalPixmap = pixmap;
  }

  setAspectRatioMode(mode: AspectRatioMode) {
    // react:✓ TODO://getter
    this.aspectRatioMode = mode;
    this.scalePixmap(this.size());
  }
  
  setTransformationMode(mode: TransformationMode) {
    // react:✓ TODO://getter
    this.transformationMode = mode;
    this.scalePixmap(this.size());
  }

  scalePixmap(size: QSize) {
    if (this.originalPixmap) {
      return super.setPixmap(
        this.originalPixmap.scaled(
          size.width(),
          size.height(),
          this.aspectRatioMode,
          this.transformationMode,
        ),
      );
    }
  }
}