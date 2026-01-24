import { QMovie } from "@nodegui/nodegui";
import { setTextProps } from "../../Text/utils/setTextProps";
import { AnimatedImageProps } from "../interfaces/AnimatedImageProps";
import { getLoadedQMovie } from "./getLoadedQMovie";
import { RNAnimatedImage } from "../scripts/RNAnimatedImage";

export const setAnimatedImageProps = (
  widget: RNAnimatedImage,
  newProps: AnimatedImageProps,
  oldProps: AnimatedImageProps
) => {
  const setter: AnimatedImageProps = {
    set src(imageUrlOrPath: string) {
      if (!imageUrlOrPath) {
        return;
      }
      getLoadedQMovie(imageUrlOrPath)
        .then((movie) => {
          widget.setMovie(movie);
          widget.movie()?.start();
        })
        .catch(console.warn);
    },
    set buffer(imageBuffer: Buffer) {
      const movie = new QMovie();
      movie.loadFromData(imageBuffer);
      widget.setMovie(movie);
      widget.movie()?.start();
    },
  };
  Object.assign(setter, newProps);
  setTextProps(widget, newProps, oldProps);
};
