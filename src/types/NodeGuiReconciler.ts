import { Reconciler } from "react-reconciler";
import { RNComponent } from "../classes/RNComponent";
import { QWidget } from "@nodegui/nodegui";

export type NodeGuiReconciler = Reconciler<
  RNComponent,
  never,
  Set<QWidget<never>>,
  never,
  never
>;