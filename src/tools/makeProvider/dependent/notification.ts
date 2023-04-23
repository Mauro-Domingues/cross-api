import { CreateContainer } from '@templates/index/container.js';
import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO.js';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification.js';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification.js';
import { CreateINotification } from '@templates/providers/models/INotification.js';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeDependentNotificationProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: IMessagesDTO;
  private fileManager: FileManager;
  private console: Console;
  private createINotification: CreateINotification;
  private createINotificationDTO: CreateINotificationDTO;
  private createOneSignalNotification: CreateOneSignalNotification;
  private createFakeNotification: CreateFakeNotification;
  private createNotificationIndex: CreateNotificationIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createINotification = new CreateINotification();
    this.createINotificationDTO = new CreateINotificationDTO();
    this.createOneSignalNotification = new CreateOneSignalNotification();
    this.createFakeNotification = new CreateFakeNotification();
    this.createNotificationIndex = new CreateNotificationIndex();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    if (!this.fileManager.checkIfExists(['src'])) {
      await this.fileManager.createDir(['src']);
    }
    if (!this.fileManager.checkIfExists(['src', 'config'])) {
      await this.fileManager.createDir(['src', 'config']);
    }
    if (!this.fileManager.checkIfExists(['src', 'modules'])) {
      await this.fileManager.createDir(['src', 'modules']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared'])) {
      await this.fileManager.createDir(['src', 'shared']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
      await this.fileManager.createDir(['src', 'shared', 'container']);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ],
        '',
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'dtos',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'dtos',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'fakes',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'fakes',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'implementations',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'implementations',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'models',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'models',
      ]);
    }
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    await this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './NotificationProvider';\n`,
    );
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'dtos',
        'ISendNotificationDTO.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'dtos',
          'ISendNotificationDTO.ts',
        ],
        this.createINotificationDTO.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'dtos',
        'ISendNotificationDTO.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'dtos',
          'ISendNotificationDTO.ts',
        ],
        this.createINotificationDTO.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'fakes',
        'FakeNotificationProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'fakes',
          'FakeNotificationProvider.ts',
        ],
        this.createFakeNotification.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'fakes',
        'FakeNotificationProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'fakes',
          'FakeNotificationProvider.ts',
        ],
        this.createFakeNotification.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'implementations',
        'OneSignalProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'implementations',
          'OneSignalProvider.ts',
        ],
        this.createOneSignalNotification.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'implementations',
        'OneSignalProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'implementations',
          'OneSignalProvider.ts',
        ],
        this.createOneSignalNotification.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'models',
        'INotificationProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'models',
          'INotificationProvider.ts',
        ],
        this.createINotification.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'models',
        'INotificationProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'models',
          'INotificationProvider.ts',
        ],
        this.createINotification.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'index.ts',
        ],
        this.createNotificationIndex.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'index.ts',
        ],
        this.createNotificationIndex.execute(),
      );
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
