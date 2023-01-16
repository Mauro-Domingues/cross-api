"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentNotificationProvider;
var _fs = _interopRequireDefault(require("fs"));
var _container = _interopRequireDefault(require("../../../../dist/templates/index/container"));
var _notificationConfig = _interopRequireDefault(require("../../../../dist/templates/providers/config/notificationConfig"));
var _INotificationDTO = _interopRequireDefault(require("../../../../dist/templates/providers/dtos/INotificationDTO"));
var _fakeNotification = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeNotification"));
var _OneSignalNotification = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/OneSignalNotification"));
var _INotification = _interopRequireDefault(require("../../../../dist/templates/providers/models/INotification"));
var _notificationIndex = _interopRequireDefault(require("../../../../dist/templates/providers/notificationIndex"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentNotificationProvider(fatherData) {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/config')) {
    _fs.default.mkdirSync('src/config');
  }
  if (!_fs.default.existsSync('src/modules')) {
    _fs.default.mkdirSync('src/modules');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/shared/container/index.ts')) {
    _fs.default.appendFile('src/shared/container/index.ts', (0, _container.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`, '', error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models`);
  }
  _fs.default.appendFile(`src/shared/container/index.ts`, `import '@modules/${fatherData.pluralLowerModuleName}/providers';`, error => {
    if (error) throw error;
  });
  _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`, `\nimport './NotificationProvider';`, error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync('src/config/notification.ts')) {
    _fs.default.appendFile('src/config/notification.ts', (0, _notificationConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/config/notification.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/config/notification.ts', (0, _notificationConfig.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`, (0, _INotificationDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`, (0, _INotificationDTO.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`, (0, _fakeNotification.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`, (0, _fakeNotification.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`, (0, _OneSignalNotification.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`, (0, _OneSignalNotification.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`, (0, _INotification.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`, (0, _INotification.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/index.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/index.ts`, (0, _notificationIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/index.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/index.ts`, (0, _notificationIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- NotificationProvider ${_messages.default.created}`, '\x1b[0m');
}