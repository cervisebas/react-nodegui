import { Brush } from '@cervisebas/react-nodegui/dist/styles/types/ColorTypes';

export interface ITheme {
  // Commons
  text: Brush;
  background: Brush;

  // Menu
  menuIcons: Brush;
  menuBackground: Brush;
  menuShadow: [number, number, number, number];
}
