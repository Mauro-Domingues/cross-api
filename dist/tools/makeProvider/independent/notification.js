"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeNotificationProvider = void 0;
var _fs = require("fs");
var _notificationConfig = require("../../../../dist/templates/providers/config/notificationConfig");
var _INotificationDTO = require("../../../../dist/templates/providers/dtos/INotificationDTO");
var _fakeNotification = require("../../../../dist/templates/providers/fakes/fakeNotification");
var _OneSignalNotification = require("../../../../dist/templates/providers/implementations/OneSignalNotification");
var _INotification = require("../../../../dist/templates/providers/models/INotification");
var _notificationIndex = require("../../../../dist/templates/providers/notificationIndex");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _path = require("path");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeNotificationProvider {
  constructor() {
    this.messages = void 0;
    this.createINotification = void 0;
    this.createINotificationDTO = void 0;
    this.createOneSignalNotification = void 0;
    this.createFakeNotification = void 0;
    this.createNotificationConfig = void 0;
    this.createNotificationIndex = void 0;
    this.messages = _messages.default;
    this.createINotification = new _INotification.CreateINotification();
    this.createINotificationDTO = new _INotificationDTO.CreateINotificationDTO();
    this.createOneSignalNotification = new _OneSignalNotification.CreateOneSignalNotification();
    this.createFakeNotification = new _fakeNotification.CreateFakeNotification();
    this.createNotificationConfig = new _notificationConfig.CreateNotificationConfig();
    this.createNotificationIndex = new _notificationIndex.CreateNotificationIndex();
  }
  async execute() {
    if (!(0, _fs.existsSync)((0, _path.resolve)('src'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'config'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models'));
    }
    (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), `import './NotificationProvider';\n`);
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config', 'notification.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'notification.ts'), this.createNotificationConfig.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'config', 'notification.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'notification.ts'), this.createNotificationConfig.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'), this.createINotificationDTO.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'), this.createINotificationDTO.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'), this.createFakeNotification.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'), this.createFakeNotification.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'), this.createOneSignalNotification.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'), this.createOneSignalNotification.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'), this.createINotification.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'), this.createINotification.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'index.ts'), this.createNotificationIndex.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'NotificationProvider', 'index.ts'), this.createNotificationIndex.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- NotificationProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeNotificationProvider = MakeNotificationProvider;