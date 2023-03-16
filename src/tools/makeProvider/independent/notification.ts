import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { CreateNotificationConfig } from '@templates/providers/config/notificationConfig';
import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
import messages from '@tools/messages';

export class MakeNotificationProvider {
  private messages: typeof messages;
  private createINotification: CreateINotification;
  private createINotificationDTO: CreateINotificationDTO;
  private createOneSignalNotification: CreateOneSignalNotification;
  private createFakeNotification: CreateFakeNotification;
  private createNotificationConfig: CreateNotificationConfig;
  private createNotificationIndex: CreateNotificationIndex;

  constructor() {
    this.messages = messages;
    this.createINotification = new CreateINotification();
    this.createINotificationDTO = new CreateINotificationDTO();
    this.createOneSignalNotification = new CreateOneSignalNotification();
    this.createFakeNotification = new CreateFakeNotification();
    this.createNotificationConfig = new CreateNotificationConfig();
    this.createNotificationIndex = new CreateNotificationIndex();
  }

  public async execute(): Promise<void> {
    if (!existsSync('src')) {
      mkdirSync('src');
    }
    if (!existsSync('src/config')) {
      mkdirSync('src/config');
    }
    if (!existsSync('src/shared')) {
      mkdirSync('src/shared');
    }
    if (!existsSync('src/shared/container')) {
      mkdirSync('src/shared/container');
    }
    if (!existsSync('src/shared/container/providers')) {
      mkdirSync('src/shared/container/providers');
    }
    if (!existsSync('src/shared/container/providers/NotificationProvider')) {
      mkdirSync('src/shared/container/providers/NotificationProvider');
    }
    if (
      !existsSync('src/shared/container/providers/NotificationProvider/dtos')
    ) {
      mkdirSync('src/shared/container/providers/NotificationProvider/dtos');
    }
    if (
      !existsSync('src/shared/container/providers/NotificationProvider/fakes')
    ) {
      mkdirSync('src/shared/container/providers/NotificationProvider/fakes');
    }
    if (
      !existsSync(
        'src/shared/container/providers/NotificationProvider/implementations',
      )
    ) {
      mkdirSync(
        'src/shared/container/providers/NotificationProvider/implementations',
      );
    }
    if (
      !existsSync('src/shared/container/providers/NotificationProvider/models')
    ) {
      mkdirSync('src/shared/container/providers/NotificationProvider/models');
    }
    appendFile(
      'src/shared/container/providers/index.ts',
      `\nimport './NotificationProvider';`,
      error => {
        if (error) throw error;
      },
    );
    if (!existsSync('src/config/notification.ts')) {
      appendFile(
        'src/config/notification.ts',
        this.createNotificationConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/notification.ts', error => {
        if (error) throw error;
      });
      appendFile(
        'src/config/notification.ts',
        this.createNotificationConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
        this.createINotificationDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
        this.createINotificationDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
        this.createFakeNotification.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
        this.createFakeNotification.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
        this.createOneSignalNotification.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
        this.createOneSignalNotification.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
        this.createINotification.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
        this.createINotification.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/NotificationProvider/index.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/NotificationProvider/index.ts',
        this.createNotificationIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/NotificationProvider/index.ts',
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        'src/shared/container/providers/NotificationProvider/index.ts',
        this.createNotificationIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- NotificationProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
