import { QGraphicsBlurEffect, QGraphicsDropShadowEffect } from '@nodegui/nodegui';

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
  
type PropertyNameGraphicsBlurEffect = |
  'blurRadius';

export type PropertyName<T> = 
  T extends QGraphicsDropShadowEffect ? PropertyNameGraphicsEffect :
  T extends QGraphicsBlurEffect ? PropertyNameGraphicsBlurEffect :
  PropertyNameGeneric;
