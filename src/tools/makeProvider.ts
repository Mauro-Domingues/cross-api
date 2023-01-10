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

export default async function makeProvider(providerName: string) {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
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
  switch (providerName) {
    case 'cache':
      if (!fs.existsSync('src/shared/container/providers/CacheProvider')) {
        fs.mkdirSync('src/shared/container/providers/CacheProvider');
      }
      if (
        !fs.existsSync('src/shared/container/providers/CacheProvider/fakes')
      ) {
        fs.mkdirSync('src/shared/container/providers/CacheProvider/fakes');
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/CacheProvider/implementations',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/CacheProvider/implementations',
        );
      }
      if (
        !fs.existsSync('src/shared/container/providers/CacheProvider/models')
      ) {
        fs.mkdirSync('src/shared/container/providers/CacheProvider/models');
      }
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './CacheProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
          createFakeRedis(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
          createFakeRedis(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
          createRedisCache(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
          createRedisCache(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
          createICache(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
          createICache(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync('src/shared/container/providers/CacheProvider/index.ts')
      ) {
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/index.ts',
          createCacheIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/CacheProvider/index.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/index.ts',
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
      if (!fs.existsSync('src/shared/container/providers/StorageProvider')) {
        fs.mkdirSync('src/shared/container/providers/StorageProvider');
      }
      if (
        !fs.existsSync('src/shared/container/providers/StorageProvider/fakes')
      ) {
        fs.mkdirSync('src/shared/container/providers/StorageProvider/fakes');
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/implementations',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/StorageProvider/implementations',
        );
      }
      if (
        !fs.existsSync('src/shared/container/providers/StorageProvider/models')
      ) {
        fs.mkdirSync('src/shared/container/providers/StorageProvider/models');
      }
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './StorageProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
          createFakeStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
          createFakeStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
          createIStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
          createIStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/index.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/index.ts',
          createStorageIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/index.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/index.ts',
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
        !fs.existsSync('src/shared/container/providers/MailTemplateProvider')
      ) {
        fs.mkdirSync('src/shared/container/providers/MailTemplateProvider');
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/dtos',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/MailTemplateProvider/dtos',
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/fakes',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/MailTemplateProvider/fakes',
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/implementations',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/MailTemplateProvider/implementations',
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/models',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/MailTemplateProvider/models',
        );
      }
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './MailTemplateProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/index.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/index.ts',
          createMailTemplateIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/index.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/index.ts',
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
        !fs.existsSync('src/shared/container/providers/MailTemplateProvider')
      ) {
        fs.mkdirSync('src/shared/container/providers/MailTemplateProvider');
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/dtos',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/MailTemplateProvider/dtos',
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/fakes',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/MailTemplateProvider/fakes',
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/implementations',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/MailTemplateProvider/implementations',
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/models',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/MailTemplateProvider/models',
        );
      }
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './MailTemplateProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailTemplateProvider/index.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/index.ts',
          createMailTemplateIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailTemplateProvider/index.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailTemplateProvider/index.ts',
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
      if (!fs.existsSync('src/shared/container/providers/MailProvider')) {
        fs.mkdirSync('src/shared/container/providers/MailProvider');
      }
      if (!fs.existsSync('src/shared/container/providers/MailProvider/dtos')) {
        fs.mkdirSync('src/shared/container/providers/MailProvider/dtos');
      }
      if (!fs.existsSync('src/shared/container/providers/MailProvider/fakes')) {
        fs.mkdirSync('src/shared/container/providers/MailProvider/fakes');
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailProvider/implementations',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/MailProvider/implementations',
        );
      }
      if (
        !fs.existsSync('src/shared/container/providers/MailProvider/models')
      ) {
        fs.mkdirSync('src/shared/container/providers/MailProvider/models');
      }
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './MailProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
          createIMailDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
          createIMailDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
          createFakeMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
          createFakeMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
          createEtherealMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
          createEtherealMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
          createSESMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
          createSESMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
          createIMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
          createIMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync('src/shared/container/providers/MailProvider/index.ts')
      ) {
        fs.appendFile(
          'src/shared/container/providers/MailProvider/index.ts',
          createMailIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/MailProvider/index.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/MailProvider/index.ts',
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
        !fs.existsSync('src/shared/container/providers/NotificationProvider')
      ) {
        fs.mkdirSync('src/shared/container/providers/NotificationProvider');
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/NotificationProvider/dtos',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/NotificationProvider/dtos',
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/NotificationProvider/fakes',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/NotificationProvider/fakes',
        );
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
        !fs.existsSync(
          'src/shared/container/providers/NotificationProvider/models',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/NotificationProvider/models',
        );
      }
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './NotificationProvider';`,
        error => {
          if (error) throw error;
        },
      );
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
      break;
    case 'lead':
      if (!fs.existsSync('src/shared/container/providers/LeadProvider')) {
        fs.mkdirSync('src/shared/container/providers/LeadProvider');
      }
      if (!fs.existsSync('src/shared/container/providers/LeadProvider/dtos')) {
        fs.mkdirSync('src/shared/container/providers/LeadProvider/dtos');
      }
      if (!fs.existsSync('src/shared/container/providers/LeadProvider/fakes')) {
        fs.mkdirSync('src/shared/container/providers/LeadProvider/fakes');
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/LeadProvider/implementations',
        )
      ) {
        fs.mkdirSync(
          'src/shared/container/providers/LeadProvider/implementations',
        );
      }
      if (
        !fs.existsSync('src/shared/container/providers/LeadProvider/models')
      ) {
        fs.mkdirSync('src/shared/container/providers/LeadProvider/models');
      }
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './LeadProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
          createILeadDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
          createILeadDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
          createFakeLead(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
          createFakeLead(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
          createRDStationLead(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
          createRDStationLead(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
          createILead(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
          createILead(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync('src/shared/container/providers/LeadProvider/index.ts')
      ) {
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/index.ts',
          createLeadIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/LeadProvider/index.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/LeadProvider/index.ts',
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
