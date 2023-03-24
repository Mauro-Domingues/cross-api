"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentProvider = void 0;
var _cache = require("./cache");
var _crypto = require("./crypto");
var _hash = require("./hash");
var _lead = require("./lead");
var _mail = require("./mail");
var _mailTemplate = require("./mailTemplate");
var _notification = require("./notification");
var _storage = require("./storage");
class MakeDependentProvider {
  constructor(providerName, fatherNames) {
    this.providerName = void 0;
    this.fatherNames = void 0;
    this.makeDependentStorageProvider = void 0;
    this.makeDependentNotificationProvider = void 0;
    this.makeDependentMailTemplateProvider = void 0;
    this.makeDependentMailProvider = void 0;
    this.makeDependentLeadProvider = void 0;
    this.makeDependentHashProvider = void 0;
    this.makeDependentCryptoProvider = void 0;
    this.makeDependentCacheProvider = void 0;
    this.providerName = providerName;
    this.fatherNames = fatherNames;
    this.makeDependentStorageProvider = new _storage.MakeDependentStorageProvider(this.fatherNames);
    this.makeDependentNotificationProvider = new _notification.MakeDependentNotificationProvider(this.fatherNames);
    this.makeDependentMailTemplateProvider = new _mailTemplate.MakeDependentMailTemplateProvider(this.fatherNames);
    this.makeDependentMailProvider = new _mail.MakeDependentMailProvider(this.fatherNames);
    this.makeDependentLeadProvider = new _lead.MakeDependentLeadProvider(this.fatherNames);
    this.makeDependentHashProvider = new _hash.MakeDependentHashProvider(this.fatherNames);
    this.makeDependentCryptoProvider = new _crypto.MakeDependentCryptoProvider(this.fatherNames);
    this.makeDependentCacheProvider = new _cache.MakeDependentCacheProvider(this.fatherNames);
  }
  async execute() {
    switch (this.providerName) {
      case 'cache':
        await this.makeDependentCacheProvider.execute();
        break;
      case 'upload':
        await this.makeDependentStorageProvider.execute();
        break;
      case 'mailTemplate':
        await this.makeDependentMailTemplateProvider.execute();
        break;
      case 'mail':
        await this.makeDependentMailProvider.execute();
        break;
      case 'notification':
        await this.makeDependentNotificationProvider.execute();
        break;
      case 'lead':
        await this.makeDependentLeadProvider.execute();
        break;
      case 'crypto':
        await this.makeDependentCryptoProvider.execute();
        break;
      case 'hash':
        await this.makeDependentHashProvider.execute();
        break;
      default:
        console.log('\x1b[1m', '\x1b[38;2;255;0;0m', messages.providerNotFound, '\x1b[0m');
        break;
    }
  }
}
exports.MakeDependentProvider = MakeDependentProvider;