import fs from 'fs';

import createCacheIndex from '../templates/providers/cacheIndex';
import createIMailDTO from '../templates/providers/dtos/IMailDTO';
import createIMailTemplateDTO from '../templates/providers/dtos/IParseMailTemplateDTO';
import createFakeRedis from '../templates/providers/fakes/fakeCache';
import createFakeMail from '../templates/providers/fakes/fakeMail';
import createFakeMailTemplate from '../templates/providers/fakes/fakeMailTemplate';
import createFakeStorage from '../templates/providers/fakes/fakeStorage';
import createDiskStorage from '../templates/providers/implementations/DiskStorage';
import createEtherealMail from '../templates/providers/implementations/EtherealMail';
import createMailTemplate from '../templates/providers/implementations/MailTemplate';
import createRedisCache from '../templates/providers/implementations/RedisCache';
import createSESMail from '../templates/providers/implementations/SESMail';
import createMailIndex from '../templates/providers/mailIndex';
import createMailTemplateIndex from '../templates/providers/mailTemplateIndex';
import createICache from '../templates/providers/models/ICache';
import createIMail from '../templates/providers/models/IMail';
import createIMailTemplate from '../templates/providers/models/IMailTemplate';
import createIStorage from '../templates/providers/models/IStorage';
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
