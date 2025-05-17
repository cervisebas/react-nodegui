import React from "react";
import { RNStackedLayout } from "../scripts/RNStackedLayout";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";

export interface StackedLayoutProps extends ViewBaseProps<RNStackedLayout> {
  currentIndex?: number;
  currentName?: string;
  children?: React.ReactNode;
}
