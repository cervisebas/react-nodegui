// eslint-disable-next-line @typescript-eslint/no-require-imports
const { QApplication } = require('../../dist');
module.exports = async () => {
  global.qApp = QApplication.instance();
  // eslint-disable-next-line no-undef
  qApp.setQuitOnLastWindowClosed(false);
};
