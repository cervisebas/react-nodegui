import { isValidBase64 } from "../../../utils/isValidBase64";
import { isValidFilePath } from "../../../utils/isValidFilePath";
import fs from "fs";

export function getSvgSource(source: string) {
  if (isValidBase64(source)) {
    const buffer = Buffer.from(source.replace(/^data:image\/\w+;base64,/, ""), "base64");
    return buffer;
  }

  if (isValidFilePath(source)) {
    const buffer = fs.readFileSync(source);
    return buffer;
  }

  return source;
}
