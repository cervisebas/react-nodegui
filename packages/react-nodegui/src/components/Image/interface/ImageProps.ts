import { AspectRatioMode, QPixmap, TransformationMode } from "@nodegui/nodegui";
import { TextProps } from "../../Text/interfaces/TextProps";
import { RNImage } from "../scripts/RNImage";
export interface ImageProps extends TextProps<RNImage> {
  src?: string;
  pixmap?: QPixmap;
  aspectRatioMode?: AspectRatioMode;
  transformationMode?: TransformationMode;
  buffer?: Buffer;
}
