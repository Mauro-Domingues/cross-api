import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createNotificationConfig } from '@templates/providers/config/notificationConfig';
import { createINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { createFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { createOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { createINotification } from '@templates/providers/models/INotification';
import { createNotificationIndex } from '@templates/providers/notificationIndex';
import messages from '@tools/messages';

export async function makeNotificationProvider(): Promise<void> {
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
  if (!existsSync('src/shared/container/providers/NotificationProvider/dtos')) {
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
      createNotificationConfig(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate('src/config/notification.ts', error => {
      if (error) console.log(error);
    });
    appendFile(
      'src/config/notification.ts',
      createNotificationConfig(),
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
      createINotificationDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
      createINotificationDTO(),
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
      createFakeNotification(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
      createFakeNotification(),
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
      createOneSignalNotification(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
      createOneSignalNotification(),
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
      createINotification(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
      createINotification(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync('src/shared/container/providers/NotificationProvider/index.ts')
  ) {
    appendFile(
      'src/shared/container/providers/NotificationProvider/index.ts',
      createNotificationIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/NotificationProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/NotificationProvider/index.ts',
      createNotificationIndex(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- NotificationProvider ${messages.created}`,
    '\x1b[0m',
  );
}
