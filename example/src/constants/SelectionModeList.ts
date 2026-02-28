import { ComboBoxItem } from '@cervisebas/react-nodegui';
import { QVariant, SelectionMode } from '@nodegui/nodegui';

export const SelectionModeList: (ComboBoxItem & { data: SelectionMode })[] = [
  {
    text: 'NoSelection',
    data: SelectionMode.NoSelection,
    userData: new QVariant(SelectionMode.NoSelection),
  },
  {
    text: 'SingleSelection',
    data: SelectionMode.SingleSelection,
    userData: new QVariant(SelectionMode.SingleSelection),
  },
];
