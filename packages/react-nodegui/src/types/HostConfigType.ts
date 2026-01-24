/* eslint-disable @typescript-eslint/no-explicit-any */
import { HostConfig } from "react-reconciler";
import { RNProps } from "../interfaces/RNProps";
import { AppContainer } from "./AppContainer";
import { RNComponent } from "../classes/RNComponent";

export type HostConfigType = HostConfig<
  string,
  RNProps,
  AppContainer,
  RNComponent,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;