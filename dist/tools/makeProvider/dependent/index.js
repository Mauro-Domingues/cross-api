"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentProvider;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _cache = _interopRequireDefault(require("./cache"));
var _crypto = _interopRequireDefault(require("./crypto"));
var _hash = _interopRequireDefault(require("./hash"));
var _lead = _interopRequireDefault(require("./lead"));
var _mail = _interopRequireDefault(require("./mail"));
var _mailTemplate = _interopRequireDefault(require("./mailTemplate"));
var _notification = _interopRequireDefault(require("./notification"));
var _storage = _interopRequireDefault(require("./storage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentProvider(providerName, fatherNames) {
  switch (providerName) {
    case 'cache':
      (0, _cache.default)(fatherNames);
      break;
    case 'storage':
      (0, _storage.default)(fatherNames);
      break;
    case 'mailTemplate':
      (0, _mailTemplate.default)(fatherNames);
      break;
    case 'mail':
      (0, _mail.default)(fatherNames);
      break;
    case 'notification':
      (0, _notification.default)(fatherNames);
      break;
    case 'lead':
      (0, _lead.default)(fatherNames);
      break;
    case 'crypto':
      (0, _crypto.default)(fatherNames);
      break;
    case 'hash':
      (0, _hash.default)(fatherNames);
      break;
    default:
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', _messages.default.providerNotFound, '\x1b[0m');
      break;
  }
}