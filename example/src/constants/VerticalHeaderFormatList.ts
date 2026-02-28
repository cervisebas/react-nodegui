import { ComboBoxItem } from '@cervisebas/react-nodegui';
import { QVariant } from '@nodegui/nodegui';
import { VerticalHeaderFormat } from '@nodegui/nodegui/dist/lib/QtWidgets/QCalendarWidget';

export const VerticalHeaderFormatList: (ComboBoxItem & {
  data: VerticalHeaderFormat;
})[] = [
  {
    text: 'NoVerticalHeader',
    data: VerticalHeaderFormat.NoVerticalHeader,
    userData: new QVariant(VerticalHeaderFormat.NoVerticalHeader),
  },
  {
    text: 'ISOWeekNumbers',
    data: VerticalHeaderFormat.ISOWeekNumbers,
    userData: new QVariant(VerticalHeaderFormat.ISOWeekNumbers),
  },
];
