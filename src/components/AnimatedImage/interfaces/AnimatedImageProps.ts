import { TextProps } from "../../Text/interfaces/TextProps";
import { RNAnimatedImage } from "../scripts/RNAnimatedImage";

export interface AnimatedImageProps extends TextProps<RNAnimatedImage> {
  src?: string;
  buffer?: Buffer;
}
