import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateContainer } from '@templates/index/container';
import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { resolve } from 'path';
import { Console } from '@tools/console';

export class MakeDependentNotificationProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: IMessagesDTO;
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

    if (!existsSync(resolve('src'))) {
      mkdirSync(resolve('src'));
    }
    if (!existsSync(resolve('src', 'config'))) {
      mkdirSync(resolve('src', 'config'));
    }
    if (!existsSync(resolve('src', 'modules'))) {
      mkdirSync(resolve('src', 'modules'));
    }
    if (!existsSync(resolve('src', 'shared'))) {
      mkdirSync(resolve('src', 'shared'));
    }
    if (!existsSync(resolve('src', 'shared', 'container'))) {
      mkdirSync(resolve('src', 'shared', 'container'));
    }
    if (!existsSync(resolve('src', 'shared', 'container', 'index.ts'))) {
      appendFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        this.createContainer.execute(),
      );
    }
    if (
      !existsSync(
        resolve('src', 'modules', this.fatherNames.pluralLowerModuleName),
      )
    ) {
      mkdirSync(
        resolve('src', 'modules', this.fatherNames.pluralLowerModuleName),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ),
        '',
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'dtos',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'dtos',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'fakes',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'fakes',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'implementations',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'implementations',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'models',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'models',
        ),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'index.ts'),
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    appendFileSync(
      resolve(
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ),
      `import './NotificationProvider';\n`,
    );
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'dtos',
          'ISendNotificationDTO.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'dtos',
          'ISendNotificationDTO.ts',
        ),
        this.createINotificationDTO.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'dtos',
          'ISendNotificationDTO.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'dtos',
          'ISendNotificationDTO.ts',
        ),
        this.createINotificationDTO.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'fakes',
          'FakeNotificationProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'fakes',
          'FakeNotificationProvider.ts',
        ),
        this.createFakeNotification.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'fakes',
          'FakeNotificationProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'fakes',
          'FakeNotificationProvider.ts',
        ),
        this.createFakeNotification.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'implementations',
          'OneSignalProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'implementations',
          'OneSignalProvider.ts',
        ),
        this.createOneSignalNotification.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'implementations',
          'OneSignalProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'implementations',
          'OneSignalProvider.ts',
        ),
        this.createOneSignalNotification.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'models',
          'INotificationProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'models',
          'INotificationProvider.ts',
        ),
        this.createINotification.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'models',
          'INotificationProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'models',
          'INotificationProvider.ts',
        ),
        this.createINotification.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'index.ts',
        ),
        this.createNotificationIndex.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'index.ts',
        ),
        this.createNotificationIndex.execute(),
      );
    }
    this.console.one([
      `- NotificationProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
