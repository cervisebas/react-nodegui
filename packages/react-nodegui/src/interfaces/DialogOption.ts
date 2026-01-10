import { Option } from "@nodegui/nodegui";

export interface DialogOption<T = Option> {
  option: T;
  on: boolean;
}
