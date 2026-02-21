import { ComboBoxItem } from "@cervisebas/react-nodegui";
import { DayOfWeek, QVariant } from "@nodegui/nodegui";

export const FirstDayOfWeekList: (ComboBoxItem & { data: DayOfWeek })[] = [
  {
    text: 'Friday',
    data: DayOfWeek.Friday,
    userData: new QVariant(DayOfWeek.Friday),
  },
  {
    text: 'Monday',
    data: DayOfWeek.Monday,
    userData: new QVariant(DayOfWeek.Monday),
  },
  {
    text: 'Saturday',
    data: DayOfWeek.Saturday,
    userData: new QVariant(DayOfWeek.Saturday),
  },
  {
    text: 'Sunday',
    data: DayOfWeek.Sunday,
    userData: new QVariant(DayOfWeek.Sunday),
  },
  {
    text: 'Thursday',
    data: DayOfWeek.Thursday,
    userData: new QVariant(DayOfWeek.Thursday),
  },
  {
    text: 'Tuesday',
    data: DayOfWeek.Tuesday,
    userData: new QVariant(DayOfWeek.Tuesday),
  },
  {
    text: 'Wednesday',
    data: DayOfWeek.Wednesday,
    userData: new QVariant(DayOfWeek.Wednesday),
  },
];
