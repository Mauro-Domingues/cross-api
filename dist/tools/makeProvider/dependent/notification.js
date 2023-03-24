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
exports.MakeDependentNotificationProvider = void 0;
const fs_1 = require("fs");
const container_1 = require("@templates/index/container");
const notificationConfig_1 = require("@templates/providers/config/notificationConfig");
const INotificationDTO_1 = require("@templates/providers/dtos/INotificationDTO");
const fakeNotification_1 = require("@templates/providers/fakes/fakeNotification");
const OneSignalNotification_1 = require("@templates/providers/implementations/OneSignalNotification");
const INotification_1 = require("@templates/providers/models/INotification");
const notificationIndex_1 = require("@templates/providers/notificationIndex");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeDependentNotificationProvider {
    constructor(fatherNames) {
        this.fatherNames = fatherNames;
        this.messages = new messages_1.Messages().execute();
        this.createINotification = new INotification_1.CreateINotification();
        this.createINotificationDTO = new INotificationDTO_1.CreateINotificationDTO();
        this.createOneSignalNotification = new OneSignalNotification_1.CreateOneSignalNotification();
        this.createFakeNotification = new fakeNotification_1.CreateFakeNotification();
        this.createNotificationConfig = new notificationConfig_1.CreateNotificationConfig();
        this.createNotificationIndex = new notificationIndex_1.CreateNotificationIndex();
        this.createContainer = new container_1.CreateContainer();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.fatherNames) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'config'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), '');
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'dtos'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'dtos'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'fakes'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'fakes'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'implementations'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'implementations'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'models'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'models'));
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`);
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), `import './NotificationProvider';\n`);
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', 'notification.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'notification.ts'), this.createNotificationConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'config', 'notification.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'notification.ts'), this.createNotificationConfig.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'), this.createINotificationDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'), this.createINotificationDTO.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'), this.createFakeNotification.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'), this.createFakeNotification.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'), this.createOneSignalNotification.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'), this.createOneSignalNotification.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'), this.createINotification.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'), this.createINotification.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'index.ts'), this.createNotificationIndex.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'NotificationProvider', 'index.ts'), this.createNotificationIndex.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- NotificationProvider ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeDependentNotificationProvider = MakeDependentNotificationProvider;
