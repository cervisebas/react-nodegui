import { AspectRatioMode, TransformationMode } from "@nodegui/nodegui";
import { TextProps } from "../../Text/interfaces/TextProps";
import { RNImage } from "../scripts/RNImage";
export interface ImageProps extends TextProps<RNImage> {
  src?: string;
  aspectRatioMode?: AspectRatioMode;
  transformationMode?: TransformationMode;
  buffer?: Buffer;
}
