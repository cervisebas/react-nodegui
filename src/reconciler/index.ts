import Reconciler from "react-reconciler";
import { QWidget } from "@nodegui/nodegui";
import { AppContainer } from "../types/AppContainer";
import { HostConfigType } from "../types/HostConfigType";
import { getComponentByTagName } from "../utils/component.config";
import { shouldIgnoreChild } from "./utils";

export const appContainer: AppContainer = new Set<QWidget<never>>();

const HostConfig: HostConfigType = {
  //now: Date.now,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,
  isPrimaryRenderer: true,
  getRootHostContext() {
    return {
      name: "rootnode",
    };
  },
  getChildHostContext(parentHostContext, type, rootContainer) {
    const { getContext } = getComponentByTagName(type);
    return getContext(parentHostContext, rootContainer);
  },
  shouldSetTextContent(type, props) {
    const { shouldSetTextContent } = getComponentByTagName(type);
    return shouldSetTextContent(props);
  },
  createTextInstance(text) {
    console.warn(
      "createTextInstance called in reconciler when platform doesnt have host level text. "
    );
    console.warn(`Use <Text /> component to add the text: ${text}`);
  },
  createInstance(type, props, rootContainer, hostContext, internalHandle) {
    const { createInstance } = getComponentByTagName(type);
    return createInstance(
      props,
      rootContainer,
      hostContext,
      internalHandle
    );
  },
  appendInitialChild(parentInstance, child) {
    if (shouldIgnoreChild(child)) {
      return;
    }
    parentInstance.appendInitialChild(child);
  },
  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
    const { finalizeInitialChildren } = getComponentByTagName(type);
    return finalizeInitialChildren(
      instance,
      props,
      rootContainer,
      hostContext as never
    );
  },
  prepareForCommit() {
    return null;
  },
  resetAfterCommit() {
    return null;
  },
  commitMount(instance, type, props, internalInstanceHandle) {
    const { commitMount } = getComponentByTagName(type);
    return commitMount(instance, props, internalInstanceHandle as never);
  },
  appendChildToContainer(container, child: QWidget<never>) {
    container.add(child);
  },
  insertInContainerBefore(container, child) {
    container.add(child);
  },
  removeChildFromContainer(container, child) {
    container.delete(child);
    if (child.close) {
      child.close();
    }
  },
  prepareUpdate(instance, type, oldProps, newProps, rootContainer, hostContext) {
    const { prepareUpdate } = getComponentByTagName(type);
    return prepareUpdate(
      instance,
      oldProps,
      newProps,
      rootContainer,
      hostContext as never
    );
  },
  commitUpdate(instance, updatePayload, type, prevProps, nextProps, internalHandle) {
    const { commitUpdate } = getComponentByTagName(type);
    return commitUpdate(
      instance,
      updatePayload as never,
      prevProps,
      nextProps,
      internalHandle
    );
  },
  appendChild(parentInstance, child) {
    if (shouldIgnoreChild(child)) {
      return;
    }
    parentInstance.appendChild(child);
  },
  insertBefore(parentInstance, child, beforeChild) {
    if (shouldIgnoreChild(child)) {
      return;
    }
    parentInstance.insertBefore(
      child,
      beforeChild
    );
  },
  removeChild(parentInstance, child) {
    if (!shouldIgnoreChild(child)) {
      parentInstance.removeChild(child);
    }
    if (child.close) {
      child.close();
    }
  },
  commitTextUpdate() {
    console.warn(
      "commitTextUpdate called when platform doesnt have host level text"
    );
  },
  resetTextContent() {
    console.warn("resetTextContent in reconciler triggered!");
  },
  getPublicInstance(instance) {
    return instance;
  },
  /* shouldDeprioritizeSubtree(_type: never, props: never) {
    if ((props as {visible: boolean}).visible === false) {
      return true;
    }
    return false;
  }, */
  hideInstance(instance) {
    (instance as never as QWidget<never>)?.hide();
  },
  unhideInstance(instance) {
    (instance as never as QWidget<never>)?.show();
  },
  hideTextInstance() {
    console.warn(
      "hideTextInstance called when platform doesnt have host level text"
    );
  },
  unhideTextInstance() {
    console.warn(
      "unhideTextInstance called when platform doesnt have host level text"
    );
  },
  clearContainer() {
    return;
  },

  preparePortalMount() {
    throw new Error("Function not implemented.");
  },
  getCurrentEventPriority() {
    throw new Error("Function not implemented.");
  },
  getInstanceFromNode() {
    throw new Error("Function not implemented.");
  },
  beforeActiveInstanceBlur() {
    throw new Error("Function not implemented.");
  },
  afterActiveInstanceBlur() {
    throw new Error("Function not implemented.");
  },
  prepareScopeUpdate() {
    throw new Error("Function not implemented.");
  },
  getInstanceFromScope() {
    throw new Error("Function not implemented.");
  },
  detachDeletedInstance() {
    throw new Error("Function not implemented.");
  }
};

export default Reconciler(HostConfig);
