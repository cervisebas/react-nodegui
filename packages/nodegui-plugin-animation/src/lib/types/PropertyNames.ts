import { QGraphicsDropShadowEffect } from '@nodegui/nodegui';

type PropertyNameGeneric = |
  'geometry' |
  'pos' |
  'size' |
  'minimumSize' |
  'maximumSize' |
  'windowOpacity' |
  'visible';

type PropertyNameGraphicsEffect = |
  'blurRadius' |
  'xOffset' |
  'yOffset' |
  'color';

export type PropertyName<T> = 
  T extends QGraphicsDropShadowEffect ? PropertyNameGraphicsEffect :
  PropertyNameGeneric;
