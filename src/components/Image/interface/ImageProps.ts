import { AspectRatioMode, TransformationMode } from "@nodegui/nodegui";
import { TextProps } from "../../Text/interfaces/TextProps";

export interface ImageProps extends TextProps {
  src?: string;
  aspectRatioMode?: AspectRatioMode;
  transformationMode?: TransformationMode;
  buffer?: Buffer;
}
