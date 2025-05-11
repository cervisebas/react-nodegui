import React from "react";
import { RNStackedLayout } from "../scripts/RNStackedLayout";

export interface StackedLayoutProps {
  ref?: React.Ref<RNStackedLayout>;
  currentIndex?: number;
  currentName?: string;
  children?: React.ReactNode;
}
