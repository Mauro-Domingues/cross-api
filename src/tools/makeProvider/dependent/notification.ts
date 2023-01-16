import fs from 'fs';
import createContainer from '@templates/index/container';
import createNotificationConfig from '@templates/providers/config/notificationConfig';
import createINotificationDTO from '@templates/providers/dtos/INotificationDTO';
import createFakeNotification from '@templates/providers/fakes/fakeNotification';
import createOneSignalNotification from '@templates/providers/implementations/OneSignalNotification';
import createINotification from '@templates/providers/models/INotification';
import createNotificationIndex from '@templates/providers/notificationIndex';
import messages from '@tools/messages';

export default async function makeDependentNotificationProvider(fatherData: {
  [key: string]: string;
}): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/modules')) {
    fs.mkdirSync('src/modules');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/index.ts')) {
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  if (!fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}`);
  }
  if (
    !fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`)
  ) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`,
      '',
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models`,
    );
  }
  fs.appendFile(
    `src/shared/container/index.ts`,
    `import '@modules/${fatherData.pluralLowerModuleName}/providers';`,
    error => {
      if (error) throw error;
    },
  );
  fs.appendFile(
    `src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`,
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
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`,
      createINotificationDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`,
      createINotificationDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`,
      createFakeNotification(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`,
      createFakeNotification(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`,
      createOneSignalNotification(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`,
      createOneSignalNotification(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`,
      createINotification(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`,
      createINotification(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/index.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/index.ts`,
      createNotificationIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/index.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/NotificationProvider/index.ts`,
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
