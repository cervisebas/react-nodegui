import { TextProps } from "../../Text/interfaces/TextProps";

export interface AnimatedImageProps extends TextProps {
  src?: string;
  buffer?: Buffer;
}
