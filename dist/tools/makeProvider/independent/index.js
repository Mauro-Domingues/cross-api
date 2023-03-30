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
exports.MakeProvider = void 0;
const messages_1 = require("../../messages");
const cache_1 = require("./cache");
const crypto_1 = require("./crypto");
const hash_1 = require("./hash");
const lead_1 = require("./lead");
const mail_1 = require("./mail");
const mailTemplate_1 = require("./mailTemplate");
const notification_1 = require("./notification");
const storage_1 = require("./storage");
class MakeProvider {
    constructor(providerName) {
        this.providerName = providerName;
        this.messages = new messages_1.Messages().execute();
        this.makeStorageProvider = new storage_1.MakeStorageProvider();
        this.makeNotificationProvider = new notification_1.MakeNotificationProvider();
        this.makeMailTemplateProvider = new mailTemplate_1.MakeMailTemplateProvider();
        this.makeMailProvider = new mail_1.MakeMailProvider();
        this.makeLeadProvider = new lead_1.MakeLeadProvider();
        this.makeHashProvider = new hash_1.MakeHashProvider();
        this.makeCryptoProvider = new crypto_1.MakeCryptoProvider();
        this.makeCacheProvider = new cache_1.MakeCacheProvider();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.providerName) {
                case 'cache':
                    yield this.makeCacheProvider.execute();
                    break;
                case 'upload':
                    yield this.makeStorageProvider.execute();
                    break;
                case 'mailTemplate':
                    yield this.makeMailTemplateProvider.execute();
                    break;
                case 'mail':
                    yield this.makeMailProvider.execute();
                    break;
                case 'notification':
                    yield this.makeNotificationProvider.execute();
                    break;
                case 'lead':
                    yield this.makeLeadProvider.execute();
                    break;
                case 'crypto':
                    yield this.makeCryptoProvider.execute();
                    break;
                case 'hash':
                    yield this.makeHashProvider.execute();
                    break;
                default:
                    console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
                    break;
            }
        });
    }
}
exports.MakeProvider = MakeProvider;
