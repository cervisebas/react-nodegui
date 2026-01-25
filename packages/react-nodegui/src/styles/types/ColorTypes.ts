import { Alignment, Repeat, URLPath } from "./AssetTypes";

export type ColorNames =
  | 'aqua'
  | 'black'
  | 'blue'
  | 'fuchsia'
  | 'gray'
  | 'green'
  | 'lime'
  | 'maroon'
  | 'navy'
  | 'olive'
  | 'orange'
  | 'purple'
  | 'red'
  | 'silver'
  | 'teal'
  | 'white'
  | 'yellow';

export type HexColor = `#${string}`;

export type RGBColor =
  | `rgba(${number},${number},${number},${number}%)`
  | `rgb(${number},${number},${number})`
  | `rgb(${number}%,${number}%,${number}%)`;

export type HSVColor =
  | `hsv(${number},${number}%,${number}%)`
  | `hsva(${number},${number},${number},${number}%)`;

export type HSLColor =
  | `hsl(${number},${number}%,${number}%)`
  | `hsla(${number},${number},${number},${number}%)`;

export type PaletteRoleArgs = 
  | 'alternate-base'
  | 'base'
  | 'bright-text'
  | 'button'
  | 'button-text'
  | 'dark'
  | 'highlight'
  | 'highlighted-text'
  | 'light'
  | 'link'
  | 'link-visited'
  | 'mid'
  | 'midlight'
  | 'shadow'
  | 'text'
  | 'window'
  | 'window-text';

export type PaletteRole = `palette(${PaletteRoleArgs})`;

export type Gradient = 
  |	`qlineargradient(${string})`
  | `qradialgradient(${string})`
  | `qconicalgradient(${string})`;


export type Color = 
  | ColorNames
  | HexColor
  | RGBColor
  | HSVColor
  | HSLColor;

export type Brush =
  | Color
  | PaletteRole
  | Gradient;

export type Background =
  `${Brush} ${URLPath} ${Repeat} ${Alignment}`;
