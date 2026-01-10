import { QWidget } from "@nodegui/nodegui";
import { RNProps } from "../interfaces/RNProps";
import { RNComponent } from "./RNComponent";

export abstract class RNWidget extends QWidget<never> implements RNComponent {
  static tagName: string;
  abstract setProps(newProps: RNProps, oldProps: RNProps): void;
  abstract appendInitialChild(child: QWidget<never>): void;
  abstract appendChild(child: QWidget<never>): void;
  abstract insertBefore(child: QWidget<never>, beforeChild: QWidget<never>): void;
  abstract removeChild(child: QWidget<never>): void;
}
