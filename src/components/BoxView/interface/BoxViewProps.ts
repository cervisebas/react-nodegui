import { Direction, QBoxLayoutSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import React from "react";
import { RNBoxView } from "../scripts/RNBoxView";

export interface BoxViewProps extends ViewBaseProps<QBoxLayoutSignals> {
  ref?: React.Ref<RNBoxView | null>;
  direction?: Direction;
}
