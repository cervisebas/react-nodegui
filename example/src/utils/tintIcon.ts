import { CompositionMode, ImageConversionFlag, QColor, QImage, QImageFormat, QPainter, QPixmap } from "@nodegui/nodegui";

export function tintIcon(path: string, color: string) {
  let image = new QImage(path);
  image = image.convertToFormat(QImageFormat.ARGB32);

  const painter = new QPainter(image);
  painter.setCompositionMode(CompositionMode.CompositionMode_SourceIn);
  painter.fillRect(0, 0, image.width(), image.height(), new QColor(color));
  painter.end();

  return QPixmap.fromImage(image, ImageConversionFlag.NoFormatConversion);
}