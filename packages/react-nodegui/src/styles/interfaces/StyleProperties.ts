import { DialogButtonLayout } from "../enums/DialogButtonLayout";
import { Alignment, Attachment, Origin, Repeat, URLPath } from "../types/AssetTypes";
import { Border, BorderColor, BorderRadius, BorderStyle, BorderLength } from "../types/BorderTypes";
import { Background, Brush, Color } from "../types/ColorTypes";
import { AlignContent, AlignItems, AlignSelf, Display, FlexDirection, FlexWrap, JustifyContent } from "../types/FlexboxTypes";
import { Font, FontStyle, FontWeight } from "../types/FontTypes";
import { Margin, Position } from "../types/LayoutTypes";
import { Length } from "../types/LengthTypes";
import { TextDecoration } from "../types/TextTypes";

export interface StyleProperties {
  // Background
  background: Background;
  backgroundColor: Brush;
  backgroundImage: URLPath;
  backgroundRepeat: Repeat;
  backgroundPosition: Alignment;
  backgroundAttachment: Attachment;
  backgroundClip: Origin;
  backgroundOrigin: Origin;

  // Border
  border: Border;
  borderImage: URLPath;
  borderStyle: BorderStyle;
  borderWidth: BorderLength;

  borderTop: Border;
  borderRight: Border;
  borderBottom: Border;
  borderLeft: Border;

  borderColor: BorderColor;
  borderTopColor: Brush;
  borderRightColor: Brush;
  borderBottomColor: Brush;
  borderLeftColor: Brush;

  borderRadius: BorderRadius;
  borderTopLeftRadius: BorderRadius;
  borderTopRightRadius: BorderRadius;
  borderBottomLeftRadius: BorderRadius;
  borderBottomRightRadius: BorderRadius;

  borderTopStyle: BorderStyle;
  borderRightStyle: BorderStyle;
  borderBottomStyle: BorderStyle;
  borderLeftStyle: BorderStyle;

  borderTopWidth: BorderLength;
  borderRightWidth: BorderLength;
  borderBottomWidth: BorderLength;
  borderLeftWidth: BorderLength;
  
  // Outline
  outline: Border;
  outlineColor: BorderColor;
  outlineOffset: Length;
  outlineStyle: BorderStyle;

  outlineRadius: BorderRadius;
  outlineTopLeftRadius: BorderRadius;
  outlineTopRightRadius: BorderRadius;
  outlineBottomLeftRadius: BorderRadius;
  outlineBottomRightRadius: BorderRadius;

  // Layout
  top: Length;
  left: Length;
  right: Length;
  bottom: Length;

  width: Length;
  minWidth: Length;
  maxWidth: Length;

  height: Length;
  minHeight: Length;
  maxHeight: Length;
  
  opacity: number;

  position: Position;
  
  buttonLayout: DialogButtonLayout;
  dialogbuttonboxButtonsHaveIcons: boolean;

  showDecorationSelected: boolean;
  spacing: Length;

  subcontrolOrigin: Origin;
  subcontrolPosition: Alignment;

  titlebarShowTooltipsOnButtons: boolean;
  widgetAnimationDuration: number;

  // Margin
  margin: Margin;
  marginTop: Length;
  marginLeft: Length;
  marginRight: Length;
  marginBottom: Length;
  
  // Padding
  padding: Margin;
  paddingTop: Length;
  paddingLeft: Length;
  paddingRight: Length;
  paddingBottom: Length;

  // Text
  color: Brush;

  font: Font;
  fontFamily: string;
  fontSize: Length;
  fontStyle: FontStyle;
  fontWeight: FontWeight;

  selectionBackgroundColor: Brush;
  selectionColor: Brush;

  textAlign: Alignment;
  textDecoration: TextDecoration;

  // Table
  gridlineColor: Color;

  // Widget
  icon: URLPath;
  iconSize: Length;

  image: URLPath;
  imagePosition: Alignment;

  lineeditPasswordCharacter: number;
  lineeditPasswordMaskDelay: number;

  // Flexbox
  flex: number;
  display: Display;
  flexDirection: FlexDirection;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  alignContent: AlignContent;
  alignSelf: AlignSelf;
  flexWrap: FlexWrap;
  flexGrow: number;
  flexShrink: number;
  flexBasis: Length;

  aspectRatio: number;
}
