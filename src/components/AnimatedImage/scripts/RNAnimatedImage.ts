import { NativeElement, QLabel, QSize } from "@nodegui/nodegui";
import { RNWidget } from "../../../classes/RNWidget";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { AnimatedImageProps } from "../interfaces/AnimatedImageProps";
import { setAnimatedImageProps } from "../utils/setAnimatedImageProps";

export type AnimatedImageNative = NativeElement & QLabel;

export class RNAnimatedImage extends QLabel implements RNWidget {
  native!: AnimatedImageNative;
  static tagName = "animatedimage";

  setProps(newProps: AnimatedImageProps, oldProps: AnimatedImageProps): void {
    setAnimatedImageProps(this, newProps, oldProps);
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

  scaleMovie(size: QSize) {
    const movie = this.movie();
    movie?.setScaledSize(size);
  }
}
