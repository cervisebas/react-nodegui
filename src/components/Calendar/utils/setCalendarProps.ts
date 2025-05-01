import { DayOfWeek, QFont } from "@nodegui/nodegui";
import { setViewProps } from "../../View/utils/setViewProps";
import { CalendarProps } from "../interfaces/CalendarProps";
import { RNCalendar } from "../scripts/RNCalendar";
import {
  HorizontalHeaderFormat,
  VerticalHeaderFormat,
} from "@nodegui/nodegui/dist/lib/QtWidgets/QCalendarWidget";

export function setCalendarProps(
  widget: RNCalendar,
  newProps: CalendarProps,
  oldProps: CalendarProps
) {
  const setter: CalendarProps = {
    set dateEditAcceptDelay(delay: number) {
      widget.setDateEditAcceptDelay(delay);
    },
    set dateEditEnabled(enable: boolean) {
      widget.setDateEditEnabled(enable);
    },
    set firstDayOfWeek(dayOfWeek: DayOfWeek) {
      widget.setFirstDayOfWeek(dayOfWeek);
    },
    set font(font: QFont) {
      widget.setFont(font);
    },
    set gridVisible(show: boolean) {
      widget.setGridVisible(show);
    },
    set horizontalHeaderFormat(format: HorizontalHeaderFormat) {
      widget.setHorizontalHeaderFormat(format);
    },
    set navigationBarVisible(visible: boolean) {
      widget.setNavigationBarVisible(visible);
    },
    set selectionMode(mode: never) {
      widget.setSelectionMode(mode);
    },
    set verticalHeaderFormat(format: VerticalHeaderFormat) {
      widget.setVerticalHeaderFormat(format);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}
