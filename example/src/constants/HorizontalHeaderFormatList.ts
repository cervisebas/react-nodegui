import { ComboBoxItem } from '@cervisebas/react-nodegui';
import { QVariant } from '@nodegui/nodegui';
import { HorizontalHeaderFormat } from '@nodegui/nodegui/dist/lib/QtWidgets/QCalendarWidget';

export const HorizontalHeaderFormatList: (ComboBoxItem & {
  data: HorizontalHeaderFormat;
})[] = [
  {
    text: 'NoHorizontalHeader',
    data: HorizontalHeaderFormat.NoHorizontalHeader,
    userData: new QVariant(HorizontalHeaderFormat.NoHorizontalHeader),
  },
  {
    text: 'SingleLetterDayNames',
    data: HorizontalHeaderFormat.SingleLetterDayNames,
    userData: new QVariant(HorizontalHeaderFormat.SingleLetterDayNames),
  },
  {
    text: 'ShortDayNames',
    data: HorizontalHeaderFormat.ShortDayNames,
    userData: new QVariant(HorizontalHeaderFormat.ShortDayNames),
  },
  {
    text: 'LongDayNames',
    data: HorizontalHeaderFormat.LongDayNames,
    userData: new QVariant(HorizontalHeaderFormat.LongDayNames),
  },
];
