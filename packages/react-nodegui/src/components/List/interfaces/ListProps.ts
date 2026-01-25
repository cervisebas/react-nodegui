import { QListWidgetSignals } from "@nodegui/nodegui";
import { ViewBaseProps, ViewStyles } from "../../../interfaces/ViewBaseProps";
import { RNList } from "../scripts/RNList";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export type ListStyles =  
  & ViewStyles
  & Partial<Pick<
    StyleProperties,
    | 'selectionColor'
    | 'selectionBackgroundColor'
    | 'showDecorationSelected'
  >>;

export interface ListProps extends ViewBaseProps<QListWidgetSignals, ListStyles> {
  ref?: React.Ref<RNList | null>;
}