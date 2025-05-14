import path from "path";
import fs from "fs";

export function isValidFilePath(filePath: string) {
  try {
    const resolvedPath = path.resolve(filePath);
    fs.accessSync(resolvedPath);
    return true;
  } catch (err) {
    console.warn(err);
    return false;
  }
}
