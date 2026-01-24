export type Size = {
  width: number;
  height: number;
};
export type ViewSize = Size & {
  fixed?: boolean;
};
export type Position = {
  x: number;
  y: number;
};