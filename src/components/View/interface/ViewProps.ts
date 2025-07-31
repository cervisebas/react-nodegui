import React from "react";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNView } from "../scripts/RNView";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export interface ViewProps<Signals extends object> extends ViewBaseProps<Signals> {
  ref?: React.Ref<RNView | null>;
  style?:
    & ViewBaseProps<Signals>['style']
    & Partial<Pick<
      StyleProperties,
      | 'flex'
      | 'display'
      | 'flexDirection'
      | 'justifyContent'
      | 'alignItems'
      | 'alignContent'
      | 'alignSelf'
      | 'flexWrap'
      | 'flexGrow'
      | 'flexShrink'
      | 'flexBasis'
      | 'aspectRatio'
    >>;
}