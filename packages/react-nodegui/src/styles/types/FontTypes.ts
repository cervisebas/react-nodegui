import { Length } from "./LengthTypes";

export type FontStyle =
  | 'normal'
  | 'italic'
  | 'oblique';

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type Font = `${FontWeight} ${FontStyle} ${Length} ${string}`;
