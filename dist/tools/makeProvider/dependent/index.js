"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeDependentProvider = void 0;
const messages_1 = require("@tools/messages");
const cache_1 = require("./cache");
const crypto_1 = require("./crypto");
const hash_1 = require("./hash");
const lead_1 = require("./lead");
const mail_1 = require("./mail");
const mailTemplate_1 = require("./mailTemplate");
const notification_1 = require("./notification");
const storage_1 = require("./storage");
class MakeDependentProvider {
    constructor(providerName, fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.providerName = providerName;
        this.fatherNames = fatherNames;
        this.makeDependentStorageProvider = new storage_1.MakeDependentStorageProvider(this.fatherNames);
        this.makeDependentNotificationProvider =
            new notification_1.MakeDependentNotificationProvider(this.fatherNames);
        this.makeDependentMailTemplateProvider =
            new mailTemplate_1.MakeDependentMailTemplateProvider(this.fatherNames);
        this.makeDependentMailProvider = new mail_1.MakeDependentMailProvider(this.fatherNames);
        this.makeDependentLeadProvider = new lead_1.MakeDependentLeadProvider(this.fatherNames);
        this.makeDependentHashProvider = new hash_1.MakeDependentHashProvider(this.fatherNames);
        this.makeDependentCryptoProvider = new crypto_1.MakeDependentCryptoProvider(this.fatherNames);
        this.makeDependentCacheProvider = new cache_1.MakeDependentCacheProvider(this.fatherNames);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.providerName) {
                case 'cache':
                    yield this.makeDependentCacheProvider.execute();
                    break;
                case 'upload':
                    yield this.makeDependentStorageProvider.execute();
                    break;
                case 'mailTemplate':
                    yield this.makeDependentMailTemplateProvider.execute();
                    break;
                case 'mail':
                    yield this.makeDependentMailProvider.execute();
                    break;
                case 'notification':
                    yield this.makeDependentNotificationProvider.execute();
                    break;
                case 'lead':
                    yield this.makeDependentLeadProvider.execute();
                    break;
                case 'crypto':
                    yield this.makeDependentCryptoProvider.execute();
                    break;
                case 'hash':
                    yield this.makeDependentHashProvider.execute();
                    break;
                default:
                    console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
                    break;
            }
        });
    }
}
exports.MakeDependentProvider = MakeDependentProvider;
