import fs from 'fs';

import createContainer from '../templates/index/container';
import createCacheIndex from '../templates/providers/cacheIndex';
import createCacheConfig from '../templates/providers/config/cacheConfig';
import createCryptoConfig from '../templates/providers/config/cryptoConfig';
import createHashConfig from '../templates/providers/config/hashConfig';
import createLeadConfig from '../templates/providers/config/leadConfig';
import createMailConfig from '../templates/providers/config/mailConfig';
import createNotificationConfig from '../templates/providers/config/notificationConfig';
import createUploadConfig from '../templates/providers/config/uploadConfig';
import createCryptoIndex from '../templates/providers/cryptoIndex';
import createICryptoDTO from '../templates/providers/dtos/ICryptoDTO';
import createILeadDTO from '../templates/providers/dtos/ILeadDTO';
import createIMailDTO from '../templates/providers/dtos/IMailDTO';
import createINotificationDTO from '../templates/providers/dtos/INotificationDTO';
import createIMailTemplateDTO from '../templates/providers/dtos/IParseMailTemplateDTO';
import createFakeRedis from '../templates/providers/fakes/fakeCache';
import createFakeCrypto from '../templates/providers/fakes/fakeCrypto';
import createFakeHash from '../templates/providers/fakes/fakeHash';
import createFakeLead from '../templates/providers/fakes/fakeLead';
import createFakeMail from '../templates/providers/fakes/fakeMail';
import createFakeMailTemplate from '../templates/providers/fakes/fakeMailTemplate';
import createFakeNotification from '../templates/providers/fakes/fakeNotification';
import createFakeStorage from '../templates/providers/fakes/fakeStorage';
import createHashIndex from '../templates/providers/hashIndex';
import createHash from '../templates/providers/implementations/BCrypt';
import createCrypto from '../templates/providers/implementations/Crypto';
import createDiskStorage from '../templates/providers/implementations/DiskStorage';
import createEtherealMail from '../templates/providers/implementations/EtherealMail';
import createMailTemplate from '../templates/providers/implementations/MailTemplate';
import createOneSignalNotification from '../templates/providers/implementations/OneSignalNotification';
import createRDStationLead from '../templates/providers/implementations/RDStationLead';
import createRedisCache from '../templates/providers/implementations/RedisCache';
import createS3Storage from '../templates/providers/implementations/S3Storage';
import createSESMail from '../templates/providers/implementations/SESMail';
import createLeadIndex from '../templates/providers/leadIndex';
import createMailIndex from '../templates/providers/mailIndex';
import createMailTemplateIndex from '../templates/providers/mailTemplateIndex';
import createICache from '../templates/providers/models/ICache';
import createICrypto from '../templates/providers/models/ICrypto';
import createIHash from '../templates/providers/models/IHash';
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
  switch (providerName) {
    case 'cache':
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models`,
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
        `import './CacheProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (!fs.existsSync('src/config/cache.ts')) {
        fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
          if (error) throw error;
        });
      } else {
        fs.truncate('src/config/cache.ts', error => {
          if (error) console.log(error);
        });
        fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
          if (error) throw error;
        });
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
          createFakeRedis(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
          createFakeRedis(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
          createRedisCache(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
          createRedisCache(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
          createICache(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
          createICache(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
          createCacheIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
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
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/models`,
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
        `import './StorageProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (!fs.existsSync('src/config/upload.ts')) {
        fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
          if (error) throw error;
        });
      } else {
        fs.truncate('src/config/upload.ts', error => {
          if (error) console.log(error);
        });
        fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
          if (error) throw error;
        });
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
          createFakeStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
          createFakeStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
          createS3Storage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
          createS3Storage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
          createIStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
          createIStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
          createStorageIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
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
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
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
        `import './MailTemplateProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
          createMailTemplateIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
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
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
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
        `import './MailTemplateProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (!fs.existsSync('src/config/mail.ts')) {
        fs.appendFile('src/config/mail.ts', createMailConfig(), error => {
          if (error) throw error;
        });
      } else {
        fs.truncate('src/config/mail.ts', error => {
          if (error) console.log(error);
        });
        fs.appendFile('src/config/mail.ts', createMailConfig(), error => {
          if (error) throw error;
        });
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
          createIMailTemplateDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
          createFakeMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
          createMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
          createIMailTemplate(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
          createMailTemplateIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
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
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/models`,
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
        `import './MailProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
          createIMailDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
          createIMailDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
          createFakeMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
          createFakeMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
          createEtherealMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
          createEtherealMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
          createSESMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
          createSESMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
          createIMail(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
          createIMail(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/index.ts`,
          createMailIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/MailProvider/index.ts`,
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
        `import './NotificationProvider';`,
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
      break;
    case 'lead':
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/models`,
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
        `import './LeadProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (!fs.existsSync('src/config/lead.ts')) {
        fs.appendFile('src/config/lead.ts', createLeadConfig(), error => {
          if (error) throw error;
        });
      } else {
        fs.truncate('src/config/lead.ts', error => {
          if (error) console.log(error);
        });
        fs.appendFile('src/config/lead.ts', createLeadConfig(), error => {
          if (error) throw error;
        });
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/dtos/ICreateLeadDTO.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/dtos/ICreateLeadDTO.ts`,
          createILeadDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/dtos/ICreateLeadDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/dtos/ICreateLeadDTO.ts`,
          createILeadDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/fakes/FakeLeadProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/fakes/FakeLeadProvider.ts`,
          createFakeLead(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/fakes/FakeLeadProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/fakes/FakeLeadProvider.ts`,
          createFakeLead(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/implementations/RDStationProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/implementations/RDStationProvider.ts`,
          createRDStationLead(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/implementations/RDStationProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/implementations/RDStationProvider.ts`,
          createRDStationLead(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/models/ILeadProvider.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/models/ILeadProvider.ts`,
          createILead(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/models/ILeadProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/models/ILeadProvider.ts`,
          createILead(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/index.ts`,
          createLeadIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/providers/LeadProvider/index.ts`,
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
    case 'crypto':
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider`,
        )
      ) {
        fs.mkdirSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider`,
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/dtos`,
        )
      ) {
        fs.mkdirSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/dtos`,
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/models`,
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
        `modules/${fatherData.pluralLowerModuleName}/providers/index.ts`,
        `import './CryptoProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (!fs.existsSync('src/config/crypto.ts')) {
        fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
          if (error) throw error;
        });
      } else {
        fs.truncate('src/config/crypto.ts', error => {
          if (error) console.log(error);
        });
        fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
          if (error) throw error;
        });
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
        )
      ) {
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
          createICryptoDTO(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
          createICryptoDTO(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/fakes/FakeCryptoProvider.ts`,
        )
      ) {
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/fakes/FakeCryptoProvider.ts`,
          createFakeCrypto(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/fakes/FakeCryptoProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/fakes/FakeCryptoProvider.ts`,
          createFakeCrypto(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
        )
      ) {
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
          createCrypto(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
          createCrypto(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
        )
      ) {
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
          createICrypto(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
          createICrypto(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
          createCryptoIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
          createCryptoIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(
        '\x1b[38;2;255;255;0m',
        `- CryptoProvider ${messages.created}`,
        '\x1b[0m',
      );
      break;
    case 'hash':
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider`,
        )
      ) {
        fs.mkdirSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider`,
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes`,
        )
      ) {
        fs.mkdirSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations`,
        )
      ) {
        fs.mkdirSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations`,
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models`,
        )
      ) {
        fs.mkdirSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models`,
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
        `modules/${fatherData.pluralLowerModuleName}/providers/index.ts`,
        `import './HashProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (!fs.existsSync('src/config/hash.ts')) {
        fs.appendFile('src/config/hash.ts', createHashConfig(), error => {
          if (error) throw error;
        });
      } else {
        fs.truncate('src/config/hash.ts', error => {
          if (error) console.log(error);
        });
        fs.appendFile('src/config/hash.ts', createHashConfig(), error => {
          if (error) throw error;
        });
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
        )
      ) {
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
          createFakeHash(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
          createFakeHash(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations/HashProvider.ts`,
        )
      ) {
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations/HashProvider.ts`,
          createHash(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations/HashProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations/HashProvider.ts`,
          createHash(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
        )
      ) {
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
          createIHash(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
          createIHash(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/index.ts`,
        )
      ) {
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/index.ts`,
          createHashIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/index.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/index.ts`,
          createHashIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(
        '\x1b[38;2;255;255;0m',
        `- HashProvider ${messages.created}`,
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
