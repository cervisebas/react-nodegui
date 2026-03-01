import Reconciler from "react-reconciler";
import { QWidget } from "@nodegui/nodegui";
import { AppContainer } from "../types/AppContainer";
import { HostConfigType } from "../types/HostConfigType";
import { getComponentByTagName } from "../utils/component.config";
import { shouldIgnoreChild } from "./utils";

export const appContainer: AppContainer = new Set<QWidget<never>>();

const rootHostContext = { name: "rootnode" };
const noop = () => { };
const noopNull = () => null;

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
    return rootHostContext;
  },
  getChildHostContext(parentHostContext, type, rootContainer) {
    return getComponentByTagName(type).getContext(parentHostContext, rootContainer);
  },
  shouldSetTextContent(type, props) {
    return getComponentByTagName(type).shouldSetTextContent(props);
  },
  createTextInstance(text) {
    console.warn(
      "createTextInstance called in reconciler when platform doesnt have host level text. "
    );
    console.warn(`Use <Text /> component to add the text: ${text}`);
  },
  createInstance(type, props, rootContainer, hostContext, internalHandle) {
    return getComponentByTagName(type).createInstance(
      props,
      rootContainer,
      hostContext,
      internalHandle
    );
  },
  appendInitialChild(parentInstance, child) {
    if (shouldIgnoreChild(child)) return;
    parentInstance.appendInitialChild(child);
  },
  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
    return getComponentByTagName(type).finalizeInitialChildren(
      instance,
      props,
      rootContainer,
      hostContext as never
    );
  },
  prepareForCommit: noopNull,
  resetAfterCommit: noopNull,
  commitMount(instance, type, props, internalInstanceHandle) {
    return getComponentByTagName(type).commitMount(instance, props, internalInstanceHandle as never);
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
    return getComponentByTagName(type).prepareUpdate(
      instance,
      oldProps,
      newProps,
      rootContainer,
      hostContext as never
    );
  },
  commitUpdate(instance, updatePayload, type, prevProps, nextProps, internalHandle) {
    return getComponentByTagName(type).commitUpdate(
      instance,
      updatePayload as never,
      prevProps,
      nextProps,
      internalHandle
    );
  },
  appendChild(parentInstance, child) {
    if (shouldIgnoreChild(child)) return;
    parentInstance.appendChild(child);
  },
  insertBefore(parentInstance, child, beforeChild) {
    if (shouldIgnoreChild(child)) return;
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
  clearContainer: noop,
  preparePortalMount: noop,
  getCurrentEventPriority() {
    throw new Error("Function not implemented.");
  },
  getInstanceFromNode() {
    throw new Error("Function not implemented.");
  },
  beforeActiveInstanceBlur: noop,
  afterActiveInstanceBlur: noop,
  prepareScopeUpdate: noop,
  getInstanceFromScope() {
    throw new Error("Function not implemented.");
  },
  detachDeletedInstance: noop
};

export default Reconciler(HostConfig);
