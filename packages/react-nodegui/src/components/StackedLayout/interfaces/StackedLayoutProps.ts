import React from "react";
import { RNStackedLayout } from "../scripts/RNStackedLayout";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";

export interface StackedLayoutProps extends ViewBaseProps<RNStackedLayout> {
  ref?: React.Ref<RNStackedLayout>;
  currentIndex?: number;
  initialIndex?: number;
  currentName?: string;
  initialName?: string;
  children?: React.ReactNode;
}
