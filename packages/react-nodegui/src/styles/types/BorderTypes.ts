import { Brush } from "./ColorTypes";
import { Length } from "./LengthTypes";

export type BorderStyle = 
  | 'dashed'
  | 'dot-dash'
  | 'dot-dot-dash'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'inset'
  | 'outset'
  | 'ridge'
  | 'solid'
  | 'none';

export type Border = `${Length} ${BorderStyle} ${Brush}`

export type BorderLength =
  | `${Length} ${Length} ${Length} ${Length}`
  | `${Length} ${Length} ${Length}`
  | `${Length} ${Length}`
  | Length;

export type BorderColor =
  | `${string} ${string} ${string} ${string}`
  | `${string} ${string} ${string}`
  | `${string} ${string}`
  | string;

export type BorderRadius = Length | `${Length} ${Length}`;
