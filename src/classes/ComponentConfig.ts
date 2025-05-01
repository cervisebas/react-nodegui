/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fiber } from "react-reconciler";
import { RNProps } from "../interfaces/RNProps";
import { AppContainer } from "../types/AppContainer";
import { RNComponent } from "./RNComponent";
import { UpdatePayload } from "../types/UpdatePayload";

export abstract class ComponentConfig<IProps = RNProps, Instance = RNComponent> {
  abstract tagName: string;

  getContext(parentContext: object, rootInstance: AppContainer) {
    return {};
  }

  abstract shouldSetTextContent(nextProps: IProps): boolean;

  abstract createInstance(
    newProps: IProps,
    rootInstance?: AppContainer,
    context?: never,
    workInProgress?: Fiber
  ): Instance;

  finalizeInitialChildren(
    instance: Instance,
    newProps: IProps,
    rootContainerInstance: AppContainer,
    context: never
  ) {
    return false;
  }

  commitMount(
    instance: Instance,
    newProps: IProps,
    internalInstanceHandle: never
  ) {
    return;
  }
  
  prepareUpdate(
    instance: Instance,
    oldProps: IProps,
    newProps: IProps,
    rootContainerInstance: AppContainer,
    hostContext: never
  ): UpdatePayload {
    return true;
  }
  
  abstract commitUpdate(
    instance: Instance,
    updatePayload: never,
    oldProps: IProps,
    newProps: IProps,
    finishedWork: Fiber
  ): void;
}