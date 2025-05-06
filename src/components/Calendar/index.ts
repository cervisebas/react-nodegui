import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { CalendarProps } from "./interfaces/CalendarProps";
import { RNCalendar } from "./scripts/RNCalendar";

class CalendarConfig extends ComponentConfig<CalendarProps, RNCalendar> {
  tagName = RNCalendar.tagName;

  shouldSetTextContent() {
    return false;
  }

  createInstance(newProps: CalendarProps) {
    const widget = new RNCalendar();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNCalendar, newProps: CalendarProps) {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNCalendar, _updatePayload: never, oldProps: CalendarProps, newProps: CalendarProps) {
    instance.setProps(newProps, oldProps);
  }
}

export const Calendar = registerComponent<CalendarProps>(new CalendarConfig());
export { RNCalendar };
export { CalendarNative } from "./scripts/RNCalendar";
