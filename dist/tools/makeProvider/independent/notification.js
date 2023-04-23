import { CreateINotificationDTO } from '../../../templates/providers/dtos/INotificationDTO.js';
import { CreateFakeNotification } from '../../../templates/providers/fakes/fakeNotification.js';
import { CreateOneSignalNotification } from '../../../templates/providers/implementations/OneSignalNotification.js';
import { CreateINotification } from '../../../templates/providers/models/INotification.js';
import { CreateNotificationIndex } from '../../../templates/providers/notificationIndex.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { FileManager } from '../../fileManager.js';
export class MakeNotificationProvider {
    messages;
    console;
    fileManager;
    createINotification;
    createINotificationDTO;
    createOneSignalNotification;
    createFakeNotification;
    createNotificationIndex;
    constructor() {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.fileManager = new FileManager();
        this.createINotification = new CreateINotification();
        this.createINotificationDTO = new CreateINotificationDTO();
        this.createOneSignalNotification = new CreateOneSignalNotification();
        this.createFakeNotification = new CreateFakeNotification();
        this.createNotificationIndex = new CreateNotificationIndex();
    }
    async execute() {
        if (!this.fileManager.checkIfExists(['src'])) {
            await this.fileManager.createDir(['src']);
        }
        if (!this.fileManager.checkIfExists(['src', 'config'])) {
            await this.fileManager.createDir(['src', 'config']);
        }
        if (!this.fileManager.checkIfExists(['src', 'shared'])) {
            await this.fileManager.createDir(['src', 'shared']);
        }
        if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
            await this.fileManager.createDir(['src', 'shared', 'container']);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
            'dtos',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'dtos',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
            'fakes',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'fakes',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
            'implementations',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'implementations',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
            'models',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'models',
            ]);
        }
        await this.fileManager.createFile(['src', 'shared', 'container', 'providers', 'index.ts'], `import './NotificationProvider';\n`);
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
            'dtos',
            'ISendNotificationDTO.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'dtos',
                'ISendNotificationDTO.ts',
            ], this.createINotificationDTO.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'dtos',
                'ISendNotificationDTO.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'dtos',
                'ISendNotificationDTO.ts',
            ], this.createINotificationDTO.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
            'fakes',
            'FakeNotificationProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'fakes',
                'FakeNotificationProvider.ts',
            ], this.createFakeNotification.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'fakes',
                'FakeNotificationProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'fakes',
                'FakeNotificationProvider.ts',
            ], this.createFakeNotification.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
            'implementations',
            'OneSignalProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'implementations',
                'OneSignalProvider.ts',
            ], this.createOneSignalNotification.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'implementations',
                'OneSignalProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'implementations',
                'OneSignalProvider.ts',
            ], this.createOneSignalNotification.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
            'models',
            'INotificationProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'models',
                'INotificationProvider.ts',
            ], this.createINotification.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'models',
                'INotificationProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'models',
                'INotificationProvider.ts',
            ], this.createINotification.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'NotificationProvider',
            'index.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'index.ts',
            ], this.createNotificationIndex.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'index.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'NotificationProvider',
                'index.ts',
            ], this.createNotificationIndex.execute());
        }
        return this.console.one([
            `- NotificationProvider ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
    }
}
