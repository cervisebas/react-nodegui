import { QColor, QPoint, QRect, QSize } from '@nodegui/nodegui';
import { ValueAnimation } from '../types/ValueAnimation';

export function convertValue(value: ValueAnimation) {
  if (value instanceof QRect) {
    return {
      qrect: 1,
      x: value.left(),
      y: value.top(),
      width: value.width(),
      height: value.height(),
    };
  }

  if (value instanceof QPoint) {
    return {
      qpoint: 1,
      x: value.x(),
      y: value.y(),
    };
  }

  if (value instanceof QSize) {
    return {
      qsize: 1,
      width: value.width(),
      height: value.height(),
    };
  }

  if (value instanceof QColor) {
    return {
      qcolor: 1,
      r: value.red(),
      g: value.green(),
      b: value.blue(),
      a: value.alpha(),
    };
  }

  return value;
}
