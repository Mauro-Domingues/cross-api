"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDependentNotificationProvider = makeDependentNotificationProvider;
var _fs = require("fs");
var _container = require("../../../../dist/templates/index/container");
var _notificationConfig = require("../../../../dist/templates/providers/config/notificationConfig");
var _INotificationDTO = require("../../../../dist/templates/providers/dtos/INotificationDTO");
var _fakeNotification = require("../../../../dist/templates/providers/fakes/fakeNotification");
var _OneSignalNotification = require("../../../../dist/templates/providers/implementations/OneSignalNotification");
var _INotification = require("../../../../dist/templates/providers/models/INotification");
var _notificationIndex = require("../../../../dist/templates/providers/notificationIndex");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentNotificationProvider(fatherNames) {
  if (!(0, _fs.existsSync)('src')) {
    (0, _fs.mkdirSync)('src');
  }
  if (!(0, _fs.existsSync)('src/config')) {
    (0, _fs.mkdirSync)('src/config');
  }
  if (!(0, _fs.existsSync)('src/modules')) {
    (0, _fs.mkdirSync)('src/modules');
  }
  if (!(0, _fs.existsSync)('src/shared')) {
    (0, _fs.mkdirSync)('src/shared');
  }
  if (!(0, _fs.existsSync)('src/shared/container')) {
    (0, _fs.mkdirSync)('src/shared/container');
  }
  if (!(0, _fs.existsSync)('src/shared/container/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/index.ts', (0, _container.createContainer)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}`)) {
    (0, _fs.mkdirSync)(`src/modules/${fatherNames.pluralLowerModuleName}`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers`)) {
    (0, _fs.mkdirSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, '', error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider`)) {
    (0, _fs.mkdirSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos`)) {
    (0, _fs.mkdirSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes`)) {
    (0, _fs.mkdirSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations`)) {
    (0, _fs.mkdirSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models`)) {
    (0, _fs.mkdirSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models`);
  }
  (0, _fs.appendFile)(`src/shared/container/index.ts`, `import '@modules/${fatherNames.pluralLowerModuleName}/providers';`, error => {
    if (error) throw error;
  });
  (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, `\nimport './NotificationProvider';`, error => {
    if (error) throw error;
  });
  if (!(0, _fs.existsSync)('src/config/notification.ts')) {
    (0, _fs.appendFile)('src/config/notification.ts', (0, _notificationConfig.createNotificationConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/notification.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/notification.ts', (0, _notificationConfig.createNotificationConfig)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`, (0, _INotificationDTO.createINotificationDTO)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`, (0, _INotificationDTO.createINotificationDTO)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`, (0, _fakeNotification.createFakeNotification)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`, (0, _fakeNotification.createFakeNotification)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`, (0, _OneSignalNotification.createOneSignalNotification)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`, (0, _OneSignalNotification.createOneSignalNotification)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`, (0, _INotification.createINotification)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`, (0, _INotification.createINotification)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/index.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/index.ts`, (0, _notificationIndex.createNotificationIndex)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/index.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/NotificationProvider/index.ts`, (0, _notificationIndex.createNotificationIndex)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- NotificationProvider ${_messages.default.created}`, '\x1b[0m');
}