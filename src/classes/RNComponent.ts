import { Component } from "@nodegui/nodegui";
import { RNProps } from "../interfaces/RNProps";

export abstract class RNComponent {
  static tagName: string;
  abstract setProps(newProps: RNProps, oldProps: RNProps): void;
  abstract appendInitialChild(child: Component): void;
  abstract appendChild(child: Component): void;
  abstract insertBefore(child: Component, beforeChild: Component): void;
  abstract removeChild(child: Component): void;
}