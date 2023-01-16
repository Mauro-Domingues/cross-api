"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeNotificationProvider;
var _fs = _interopRequireDefault(require("fs"));
var _notificationConfig = _interopRequireDefault(require("../../../../dist/templates/providers/config/notificationConfig"));
var _INotificationDTO = _interopRequireDefault(require("../../../../dist/templates/providers/dtos/INotificationDTO"));
var _fakeNotification = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeNotification"));
var _OneSignalNotification = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/OneSignalNotification"));
var _INotification = _interopRequireDefault(require("../../../../dist/templates/providers/models/INotification"));
var _notificationIndex = _interopRequireDefault(require("../../../../dist/templates/providers/notificationIndex"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeNotificationProvider() {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/config')) {
    _fs.default.mkdirSync('src/config');
  }
  if (!_fs.default.existsSync('src/shared')) {
    _fs.default.mkdirSync('src/shared');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/shared/container/providers')) {
    _fs.default.mkdirSync('src/shared/container/providers');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider')) {
    _fs.default.mkdirSync('src/shared/container/providers/NotificationProvider');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider/dtos')) {
    _fs.default.mkdirSync('src/shared/container/providers/NotificationProvider/dtos');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider/fakes')) {
    _fs.default.mkdirSync('src/shared/container/providers/NotificationProvider/fakes');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider/implementations')) {
    _fs.default.mkdirSync('src/shared/container/providers/NotificationProvider/implementations');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider/models')) {
    _fs.default.mkdirSync('src/shared/container/providers/NotificationProvider/models');
  }
  _fs.default.appendFile('src/shared/container/providers/index.ts', `\nimport './NotificationProvider';`, error => {
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
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts')) {
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts', (0, _INotificationDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts', (0, _INotificationDTO.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts', (0, _fakeNotification.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts', (0, _fakeNotification.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts', (0, _OneSignalNotification.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts', (0, _OneSignalNotification.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts', (0, _INotification.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts', (0, _INotification.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/NotificationProvider/index.ts')) {
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/index.ts', (0, _notificationIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/NotificationProvider/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/NotificationProvider/index.ts', (0, _notificationIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- NotificationProvider ${_messages.default.created}`, '\x1b[0m');
}