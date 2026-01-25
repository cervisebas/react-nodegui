import { Length } from "./LengthTypes";

export type Margin =
  | `${Length} ${Length} ${Length} ${Length}`
  | `${Length} ${Length} ${Length}`
  | `${Length} ${Length}`
  | Length;

export type Position = 'relative' | 'absolute';
