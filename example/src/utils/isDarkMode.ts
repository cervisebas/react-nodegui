import { ColorGroup, ColorRole, QApplication } from '@nodegui/nodegui';

const app = QApplication.instance();
export function isDarkMode() {
  const palette = app.palette();

  const windowColor = palette.color(ColorGroup.Active, ColorRole.Window);

  const brightness =
    (windowColor.red() * 299 +
      windowColor.green() * 587 +
      windowColor.blue() * 114) /
    1000;

  return brightness < 128;
}
