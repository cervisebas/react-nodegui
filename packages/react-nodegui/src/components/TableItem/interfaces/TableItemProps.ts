import { AlignmentFlag, CheckState, ItemFlag, QBrush, QFont, QIcon, QSize } from "@nodegui/nodegui";
import { CellPosition } from "../types/CellPosition";
import { TableData } from "./TableData";

export interface TableItemProps {
  /**
   * position of this item in the Table
   * @tuple [row: number, column: number]
   */
  cellPosition: CellPosition;
  text?: string;
  /**
   * handle the behavior of the TableItem
   * 
   * following example makes the item non-editable+selectable only checkable
   * @example 
   * ```javascript
   * <TableItem flags={ItemFlag.ItemIsEnabled | ItemFlag.ItemIsUserCheckable} {...props}/>
   * ```
   */
  flags?: ItemFlag;
  checkState?: CheckState;
  data?: TableData;
  background?: QBrush;
  foreground?: QBrush;
  icon?: QIcon,
  selected?: boolean;
  font?: QFont;
  hintSize?: QSize;
  statusTip?: string;
  textAlignment?: AlignmentFlag;
  toolTip?: string;
  whatsThis?: string;
}
