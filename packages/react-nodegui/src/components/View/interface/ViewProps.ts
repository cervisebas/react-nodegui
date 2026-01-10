import React from "react";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNView } from "../scripts/RNView";

export interface ViewProps<Signals extends object> extends ViewBaseProps<Signals> {
  ref?: React.Ref<RNView | null>;
}