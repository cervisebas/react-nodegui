import { NativeElement, QCalendarWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../../classes/RNComponent";
import { throwUnsupported } from "../../../utils/throwUnsupported";
import { CalendarProps } from "../interfaces/CalendarProps";
import { setCalendarProps } from "../utils/setCalendarProps";

export type CalendarRef = NativeElement & QCalendarWidget;

export class RNCalendar extends QCalendarWidget implements RNComponent {
  native!: CalendarRef;
  static tagName = "calendar";
  
  setProps(newProps: CalendarProps, oldProps: CalendarProps): void {
    setCalendarProps(this, newProps, oldProps);
  }
  
  appendInitialChild() {
    throwUnsupported(this);
  }
  
  appendChild() {
    throwUnsupported(this);
  }
  
  insertBefore() {
    throwUnsupported(this);
  }
  
  removeChild() {
    throwUnsupported(this);
  }
}
