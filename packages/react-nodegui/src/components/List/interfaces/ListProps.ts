import { QListWidgetSignals } from "@nodegui/nodegui";
import { ViewBaseProps } from "../../../interfaces/ViewBaseProps";
import { RNList } from "../scripts/RNList";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export interface ListProps extends ViewBaseProps<QListWidgetSignals> {
  ref?: React.Ref<RNList | null>;
  style?:
    & ViewBaseProps<QListWidgetSignals>['style']
    & Partial<Pick<
      StyleProperties,
      | 'selectionColor'
      | 'selectionBackgroundColor'
      | 'showDecorationSelected'
    >>;
}