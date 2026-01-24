import { QPixmap } from "@nodegui/nodegui";
import { isValidUrl } from "./isValidUrl";
import { toPixmapFile } from "./toPixmapFile";
import phin from "phin";

export async function toPixmap(source: string) {
  if (isValidUrl(source)) {
    const pixMap = new QPixmap();
    const res = await phin(source);
    const imageBuffer = Buffer.from(res.body);
    pixMap.loadFromData(imageBuffer);
    return pixMap;
  }

  return toPixmapFile(source);
}