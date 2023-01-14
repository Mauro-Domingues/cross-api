import fs from 'fs';
import createNotificationConfig from '../../../templates/providers/config/notificationConfig';
import createINotificationDTO from '../../../templates/providers/dtos/INotificationDTO';
import createFakeNotification from '../../../templates/providers/fakes/fakeNotification';
import createOneSignalNotification from '../../../templates/providers/implementations/OneSignalNotification';
import createINotification from '../../../templates/providers/models/INotification';
import createNotificationIndex from '../../../templates/providers/notificationIndex';
import messages from '../../messages';

export default async function makeNotificationProvider(): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/providers')) {
    fs.mkdirSync('src/shared/container/providers');
  }
  if (!fs.existsSync('src/shared/container/providers/NotificationProvider')) {
    fs.mkdirSync('src/shared/container/providers/NotificationProvider');
  }
  if (
    !fs.existsSync('src/shared/container/providers/NotificationProvider/dtos')
  ) {
    fs.mkdirSync('src/shared/container/providers/NotificationProvider/dtos');
  }
  if (
    !fs.existsSync('src/shared/container/providers/NotificationProvider/fakes')
  ) {
    fs.mkdirSync('src/shared/container/providers/NotificationProvider/fakes');
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/NotificationProvider/implementations',
    )
  ) {
    fs.mkdirSync(
      'src/shared/container/providers/NotificationProvider/implementations',
    );
  }
  if (
    !fs.existsSync('src/shared/container/providers/NotificationProvider/models')
  ) {
    fs.mkdirSync('src/shared/container/providers/NotificationProvider/models');
  }
  fs.appendFile(
    'src/shared/container/providers/index.ts',
    `\nimport './NotificationProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (!fs.existsSync('src/config/notification.ts')) {
    fs.appendFile(
      'src/config/notification.ts',
      createNotificationConfig(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/config/notification.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/config/notification.ts',
      createNotificationConfig(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
      createINotificationDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/NotificationProvider/dtos/ISendNotificationDTO.ts',
      createINotificationDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
      createFakeNotification(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/NotificationProvider/fakes/FakeNotificationProvider.ts',
      createFakeNotification(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
      createOneSignalNotification(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/NotificationProvider/implementations/OneSignalProvider.ts',
      createOneSignalNotification(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
      createINotification(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/NotificationProvider/models/INotificationProvider.ts',
      createINotification(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/NotificationProvider/index.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/NotificationProvider/index.ts',
      createNotificationIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/NotificationProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
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
