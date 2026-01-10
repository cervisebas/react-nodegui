import { isValidUrl } from "../../../utils/isValidUrl";
import { QMovie } from "@nodegui/nodegui";
import phin from "phin";

export async function getLoadedQMovie(imageUrlOrPath: string): Promise<QMovie> {
  const movie = new QMovie();
  if (isValidUrl(imageUrlOrPath)) {
    const res = await phin(imageUrlOrPath);
    const imageBuffer = Buffer.from(res.body);
    movie.loadFromData(imageBuffer);
  } else {
    movie.setFileName(imageUrlOrPath);
  }
  return movie;
}
