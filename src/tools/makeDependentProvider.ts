import fs from 'fs';

import createCacheIndex from '../templates/providers/cacheIndex';
import createILeadDTO from '../templates/providers/dtos/ILeadDTO';
import createIMailDTO from '../templates/providers/dtos/IMailDTO';
import createINotificationDTO from '../templates/providers/dtos/INotificationDTO';
import createIMailTemplateDTO from '../templates/providers/dtos/IParseMailTemplateDTO';
import createFakeRedis from '../templates/providers/fakes/fakeCache';
import createFakeLead from '../templates/providers/fakes/fakeLead';
import createFakeMail from '../templates/providers/fakes/fakeMail';
import createFakeMailTemplate from '../templates/providers/fakes/fakeMailTemplate';
import createFakeNotification from '../templates/providers/fakes/fakeNotification';
import createFakeStorage from '../templates/providers/fakes/fakeStorage';
import createDiskStorage from '../templates/providers/implementations/DiskStorage';
import createEtherealMail from '../templates/providers/implementations/EtherealMail';
import createMailTemplate from '../templates/providers/implementations/MailTemplate';
import createOneSignalNotification from '../templates/providers/implementations/OneSignalNotification';
import createRDStationLead from '../templates/providers/implementations/RDStationLead';
import createRedisCache from '../templates/providers/implementations/RedisCache';
import createSESMail from '../templates/providers/implementations/SESMail';
import createLeadIndex from '../templates/providers/leadIndex';
import createMailIndex from '../templates/providers/mailIndex';
import createMailTemplateIndex from '../templates/providers/mailTemplateIndex';
import createICache from '../templates/providers/models/ICache';
import createILead from '../templates/providers/models/ILead';
import createIMail from '../templates/providers/models/IMail';
import createIMailTemplate from '../templates/providers/models/IMailTemplate';
import createINotification from '../templates/providers/models/INotification';
import createIStorage from '../templates/providers/models/IStorage';
import createNotificationIndex from '../templates/providers/notificationIndex';
import createStorageIndex from '../templates/providers/storageIndex';
import messages from './messages';

export default async function makeDependentProvider(
  providerName: string,
  fatherData: {
    [key: string]: string;
  },
) {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/modules')) {
    fs.mkdirSync('src/shared/modules');
  }
  if (
    !fs.existsSync(`src/shared/modules/${fatherData.pluralLowerModuleName}`)
  ) {
    fs.mkdirSync(`src/shared/modules/${fatherData.pluralLowerModuleName}`);
  }
  switch (providerName) {
    case 'cache':
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/models`,
        );
      }
      fs.appendFile(
        `src/shared/container/index.ts`,
        `import '@modules${fatherData.pluralLowerModuleName}/providers';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/fakes/FakeCacheProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/fakes/FakeCacheProvider.ts`,
          createFakeRedis(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/fakes/FakeCacheProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/fakes/FakeCacheProvider.ts`,
          createFakeRedis(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/implementations/RedisCacheProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/implementations/RedisCacheProvider.ts`,
          createRedisCache(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/implementations/RedisCacheProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/implementations/RedisCacheProvider.ts`,
          createRedisCache(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/models/ICacheProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/models/ICacheProvider.ts`,
          createICache(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/models/ICacheProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/models/ICacheProvider.ts`,
          createICache(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/index.ts`,
          createCacheIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/CacheProvider/index.ts`,
          createCacheIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(
        '\x1b[38;2;255;255;0m',
        `- CacheProvider ${messages.created}`,
        '\x1b[0m',
      );
      break;
    case 'storage':
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/models`,
        );
      }
      fs.appendFile(
        `src/shared/container/index.ts`,
        `import '@modules${fatherData.pluralLowerModuleName}/providers';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/fakes/FakeStorageProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/fakes/FakeStorageProvider.ts`,
          createFakeStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/fakes/FakeStorageProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/fakes/FakeStorageProvider.ts`,
          createFakeStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations/DiskStorageProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations/DiskStorageProvider.ts`,
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations/DiskStorageProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations/DiskStorageProvider.ts`,
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations/S3StorageProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations/S3StorageProvider.ts`,
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations/S3StorageProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/implementations/S3StorageProvider.ts`,
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/models/IStorageProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/models/IStorageProvider.ts`,
          createIStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/models/IStorageProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/models/IStorageProvider.ts`,
          createIStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/index.ts`,
          createStorageIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/StorageProvider/index.ts`,
          createStorageIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(
        '\x1b[38;2;255;255;0m',
        `- StorageProvider ${messages.created}`,
        '\x1b[0m',
      );
      break;
    case 'mailTemplate':
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models`,
        );
      }
      fs.appendFile(
        `src/shared/container/index.ts`,
        `import '@modules${fatherData.pluralLowerModuleName}/providers';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models/IMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/index.ts`,
          createMailTemplateIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/index.ts`,
          createMailTemplateIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(
        '\x1b[38;2;255;255;0m',
        `- MailTemplateProvider ${messages.created}`,
        '\x1b[0m',
      );
      break;
    case 'mail':
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models`,
        );
      }
      fs.appendFile(
        `src/shared/container/index.ts`,
        `import '@modules${fatherData.pluralLowerModuleName}/providers';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models/IMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/index.ts`,
          createMailTemplateIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailTemplateProvider/index.ts`,
          createMailTemplateIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(
        '\x1b[38;2;255;255;0m',
        `- MailTemplateProvider ${messages.created}`,
        '\x1b[0m',
      );
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/models`,
        );
      }
      fs.appendFile(
        `src/shared/container/index.ts`,
        `import '@modules${fatherData.pluralLowerModuleName}/providers';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/dtos/ISendMailDTO.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/dtos/ISendMailDTO.ts`,
          createIMailDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/dtos/ISendMailDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/dtos/ISendMailDTO.ts`,
          createIMailDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/fakes/FakeMailProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/fakes/FakeMailProvider.ts`,
          createFakeMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/fakes/FakeMailProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/fakes/FakeMailProvider.ts`,
          createFakeMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations/EtherealMailProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations/EtherealMailProvider.ts`,
          createEtherealMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations/EtherealMailProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations/EtherealMailProvider.ts`,
          createEtherealMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations/SESMailProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations/SESMailProvider.ts`,
          createSESMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations/SESMailProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/implementations/SESMailProvider.ts`,
          createSESMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/models/IMailProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/models/IMailProvider.ts`,
          createIMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/models/IMailProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/models/IMailProvider.ts`,
          createIMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/index.ts`,
          createMailIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/MailProvider/index.ts`,
          createMailIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(
        '\x1b[38;2;255;255;0m',
        `- MailProvider ${messages.created}`,
        '\x1b[0m',
      );
      break;
    case 'notification':
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/models`,
        );
      }
      fs.appendFile(
        `src/shared/container/index.ts`,
        `import '@modules${fatherData.pluralLowerModuleName}/providers';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/dtos/ISendNotificationDTO.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/dtos/ISendNotificationDTO.ts`,
          createINotificationDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/dtos/ISendNotificationDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/dtos/ISendNotificationDTO.ts`,
          createINotificationDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/fakes/FakeNotificationProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/fakes/FakeNotificationProvider.ts`,
          createFakeNotification(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/fakes/FakeNotificationProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/fakes/FakeNotificationProvider.ts`,
          createFakeNotification(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/implementations/OneSignalProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/implementations/OneSignalProvider.ts`,
          createOneSignalNotification(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/implementations/OneSignalProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/implementations/OneSignalProvider.ts`,
          createOneSignalNotification(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/models/INotificationProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/models/INotificationProvider.ts`,
          createINotification(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/models/INotificationProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/models/INotificationProvider.ts`,
          createINotification(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/index.ts`,
          createNotificationIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/NotificationProvider/index.ts`,
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
      break;
    case 'lead':
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/models`,
        );
      }
      fs.appendFile(
        `src/shared/container/index.ts`,
        `import '@modules${fatherData.pluralLowerModuleName}/providers';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/dtos/ICreateLeadDTO.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/dtos/ICreateLeadDTO.ts`,
          createILeadDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/dtos/ICreateLeadDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/dtos/ICreateLeadDTO.ts`,
          createILeadDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/fakes/FakeLeadProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/fakes/FakeLeadProvider.ts`,
          createFakeLead(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/fakes/FakeLeadProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/fakes/FakeLeadProvider.ts`,
          createFakeLead(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/implementations/RDStationProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/implementations/RDStationProvider.ts`,
          createRDStationLead(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/implementations/RDStationProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/implementations/RDStationProvider.ts`,
          createRDStationLead(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/models/ILeadProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/models/ILeadProvider.ts`,
          createILead(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/models/ILeadProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/models/ILeadProvider.ts`,
          createILead(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/index.ts`,
          createLeadIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/shared/modules/${fatherData.pluralLowerModuleName}/LeadProvider/index.ts`,
          createLeadIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(
        '\x1b[38;2;255;255;0m',
        `- LeadProvider ${messages.created}`,
        '\x1b[0m',
      );
      break;
    default:
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        messages.providerNotFound,
        '\x1b[0m',
      );
      break;
  }
}
