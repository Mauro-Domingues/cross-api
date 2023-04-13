import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateINotificationDTO } from '../../../templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '../../../templates/providers/fakes/fakeNotification';
import { CreateOneSignalNotification } from '../../../templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '../../../templates/providers/models/INotification';
import { CreateNotificationIndex } from '../../../templates/providers/notificationIndex';
import { Messages } from '../../messages';
import { resolve } from 'path';
export class MakeNotificationProvider {
    messages;
    createINotification;
    createINotificationDTO;
    createOneSignalNotification;
    createFakeNotification;
    createNotificationIndex;
    constructor() {
        this.messages = new Messages().execute();
        this.createINotification = new CreateINotification();
        this.createINotificationDTO = new CreateINotificationDTO();
        this.createOneSignalNotification = new CreateOneSignalNotification();
        this.createFakeNotification = new CreateFakeNotification();
        this.createNotificationIndex = new CreateNotificationIndex();
    }
    async execute() {
        if (!existsSync(resolve('src'))) {
            mkdirSync(resolve('src'));
        }
        if (!existsSync(resolve('src', 'config'))) {
            mkdirSync(resolve('src', 'config'));
        }
        if (!existsSync(resolve('src', 'shared'))) {
            mkdirSync(resolve('src', 'shared'));
        }
        if (!existsSync(resolve('src', 'shared', 'container'))) {
            mkdirSync(resolve('src', 'shared', 'container'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models'));
        }
        appendFileSync(resolve('src', 'shared', 'container', 'providers', 'index.ts'), `import './NotificationProvider';\n`);
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'), this.createINotificationDTO.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'dtos', 'ISendNotificationDTO.ts'), this.createINotificationDTO.execute());
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'), this.createFakeNotification.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'fakes', 'FakeNotificationProvider.ts'), this.createFakeNotification.execute());
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'), this.createOneSignalNotification.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'implementations', 'OneSignalProvider.ts'), this.createOneSignalNotification.execute());
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'), this.createINotification.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'models', 'INotificationProvider.ts'), this.createINotification.execute());
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'index.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'index.ts'), this.createNotificationIndex.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'index.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'NotificationProvider', 'index.ts'), this.createNotificationIndex.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- NotificationProvider ${this.messages.created}`, '\x1b[0m');
    }
}
