import { ItemFlag, CheckState, QBrush, QIcon, QFont, QSize, AlignmentFlag } from "@nodegui/nodegui";
import { TableData } from "../interfaces/TableData";
import { SimplifiedTableItemProps } from "../types/SimplifiedTableItemProps";
import { RNTableItem } from "../scripts/RNTableItem";

export function setTableItemProps(
  widget: RNTableItem,
  newProps: SimplifiedTableItemProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  oldProps: SimplifiedTableItemProps,
) {
  const setter: SimplifiedTableItemProps = {
    set text(text: string) {
      widget.setText(text);
    },
    set flags(flags: ItemFlag){
      widget.setFlags(flags)
    },   
    set checkState(checkState: CheckState){
      widget.setCheckState(checkState)
    },   
    set data({role, value}: TableData){
      widget.setData(role, value)
    },   
    set background(background: QBrush){
      widget.setBackground(background)
    },   
    set foreground(foreground: QBrush){
      widget.setForeground(foreground);
    },   
    set icon(icon: QIcon){
      widget.setIcon(icon);
    },   
    set selected(selected: boolean){
      widget.setSelected(selected);
    },   
    set font(font: QFont){
      widget.setFont(font)
    },   
    set hintSize(hintSize: QSize){
      widget.setSizeHint(hintSize);
    },   
    set statusTip(statusTip: string){
      widget.setStatusTip(statusTip);
    },   
    set textAlignment(textAlignment: AlignmentFlag){
      widget.setTextAlignment(textAlignment);
    },   
    set toolTip(toolTip: string) {
      widget.setToolTip(toolTip);
    },
    set whatsThis(whatsThis: string) {
      widget.setWhatsThis(whatsThis);
    },
  };
  Object.assign(setter, newProps);
}
