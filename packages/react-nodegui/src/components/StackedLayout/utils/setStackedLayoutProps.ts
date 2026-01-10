import { setViewProps } from "../../View/utils/setViewProps";
import { StackedLayoutProps } from "../interfaces/StackedLayoutProps";
import { RNStackedLayout } from "../scripts/RNStackedLayout";

export function setStackedLayoutProps(
  widget: RNStackedLayout,
  newProps: StackedLayoutProps,
  oldProps: StackedLayoutProps,
) {
  const setter: StackedLayoutProps = {
    set currentIndex(index: number) {
      widget.goToIndex(index);
    },
    set currentName(name: string) {
      widget.goToPage(name);
    },
  };

  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}