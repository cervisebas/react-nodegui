import { QPixmap } from "@nodegui/nodegui";
import { isValidBase64 } from "./isValidBase64";

export function toPixmapFile(source: string) {
  const pixMap = new QPixmap();
  
  if (isValidBase64(source)) {
    const buffer = Buffer.from(source.replace(/^data:image\/\w+;base64,/, ""), "base64");
    pixMap.loadFromData(buffer);
    return pixMap;
  }

  pixMap.load(source);
  return pixMap;
}