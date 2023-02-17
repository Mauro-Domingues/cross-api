"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeProvider = makeProvider;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _cache = require("./cache");
var _crypto = require("./crypto");
var _hash = require("./hash");
var _lead = require("./lead");
var _mail = require("./mail");
var _mailTemplate = require("./mailTemplate");
var _notification = require("./notification");
var _storage = require("./storage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeProvider(providerName) {
  switch (providerName) {
    case 'cache':
      (0, _cache.makeCacheProvider)();
      break;
    case 'storage':
      (0, _storage.makeStorageProvider)();
      break;
    case 'mailTemplate':
      (0, _mailTemplate.makeMailTemplateProvider)();
      break;
    case 'mail':
      (0, _mail.makeMailProvider)();
      break;
    case 'notification':
      (0, _notification.makeNotificationProvider)();
      break;
    case 'lead':
      (0, _lead.makeLeadProvider)();
      break;
    case 'crypto':
      (0, _crypto.makeCryptoProvider)();
      break;
    case 'hash':
      (0, _hash.makeHashProvider)();
      break;
    default:
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', _messages.default.providerNotFound, '\x1b[0m');
      break;
  }
}