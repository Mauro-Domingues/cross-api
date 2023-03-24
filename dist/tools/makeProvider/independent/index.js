"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeProvider = void 0;
var _cache = require("./cache");
var _crypto = require("./crypto");
var _hash = require("./hash");
var _lead = require("./lead");
var _mail = require("./mail");
var _mailTemplate = require("./mailTemplate");
var _notification = require("./notification");
var _storage = require("./storage");
class MakeProvider {
  constructor(providerName) {
    this.providerName = void 0;
    this.makeStorageProvider = void 0;
    this.makeNotificationProvider = void 0;
    this.makeMailTemplateProvider = void 0;
    this.makeMailProvider = void 0;
    this.makeLeadProvider = void 0;
    this.makeHashProvider = void 0;
    this.makeCryptoProvider = void 0;
    this.makeCacheProvider = void 0;
    this.providerName = providerName;
    this.makeStorageProvider = new _storage.MakeStorageProvider();
    this.makeNotificationProvider = new _notification.MakeNotificationProvider();
    this.makeMailTemplateProvider = new _mailTemplate.MakeMailTemplateProvider();
    this.makeMailProvider = new _mail.MakeMailProvider();
    this.makeLeadProvider = new _lead.MakeLeadProvider();
    this.makeHashProvider = new _hash.MakeHashProvider();
    this.makeCryptoProvider = new _crypto.MakeCryptoProvider();
    this.makeCacheProvider = new _cache.MakeCacheProvider();
  }
  async execute() {
    switch (this.providerName) {
      case 'cache':
        await this.makeCacheProvider.execute();
        break;
      case 'upload':
        await this.makeStorageProvider.execute();
        break;
      case 'mailTemplate':
        await this.makeMailTemplateProvider.execute();
        break;
      case 'mail':
        await this.makeMailProvider.execute();
        break;
      case 'notification':
        await this.makeNotificationProvider.execute();
        break;
      case 'lead':
        await this.makeLeadProvider.execute();
        break;
      case 'crypto':
        await this.makeCryptoProvider.execute();
        break;
      case 'hash':
        await this.makeHashProvider.execute();
        break;
      default:
        console.log('\x1b[1m', '\x1b[38;2;255;0;0m', messages.providerNotFound, '\x1b[0m');
        break;
    }
  }
}
exports.MakeProvider = MakeProvider;