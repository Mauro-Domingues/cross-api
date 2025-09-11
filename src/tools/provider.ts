import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IProviderListDTO } from '@interfaces/IProviderListDTO';
import { CreateCacheProvider } from '@tools/makeProvider/cache';
import { CreateCryptoProvider } from '@tools/makeProvider/crypto';
import { CreateHashProvider } from '@tools/makeProvider/hash';
import { CreateLeadProvider } from '@tools/makeProvider/lead';
import { CreateMailProvider } from '@tools/makeProvider/mail';
import { CreateMailTemplateProvider } from '@tools/makeProvider/mailTemplate';
import { CreateNotificationProvider } from '@tools/makeProvider/notification';
import { CreateQueueProvider } from '@tools/makeProvider/queue';
import { CreateStorageProvider } from '@tools/makeProvider/storage';

export class Provider {
  public readonly list: IProviderListDTO;

  public constructor(
    private readonly fatherNames?: Pick<
      IModuleNameDTO,
      'pluralLowerModuleName'
    >,
  ) {
    this.list = Object.freeze<IProviderListDTO>({
      cache: {
        name: 'cache',
        description: 'CacheProvider',
        instance: () => new CreateCacheProvider(this.fatherNames),
        dependencies: ['ioredis@^5.6.1'],
        devDependencies: [],
      },
      crypto: {
        name: 'crypto',
        description: 'CryptoProvider',
        instance: () => new CreateCryptoProvider(this.fatherNames),
        dependencies: ['jsonwebtoken@^9.0.2', 'pem-jwk@^2.0.0'],
        devDependencies: [
          '@types/jsonwebtoken@^9.0.9',
          '@types/pem-jwk@^2.0.2',
        ],
      },
      hash: {
        name: 'hash',
        description: 'HashProvider',
        instance: () => new CreateHashProvider(this.fatherNames),
        dependencies: ['bcrypt@^6.0.0'],
        devDependencies: ['@types/bcrypt@^5.0.2'],
      },
      lead: {
        name: 'lead',
        description: 'leadProvider',
        instance: () => new CreateLeadProvider(this.fatherNames),
        dependencies: ['axios@^1.9.0'],
        devDependencies: [],
      },
      mail: {
        name: 'mail',
        description: 'MailProvider',
        instance: () => ({
          execute: (): void => {
            new CreateMailTemplateProvider(this.fatherNames).execute();
            return new CreateMailProvider(this.fatherNames).execute();
          },
        }),
        dependencies: [
          '@aws-sdk/client-ses@^3.821.0',
          'handlebars@^4.7.8',
          'nodemailer@^7.0.3',
        ],
        devDependencies: ['@types/nodemailer@^6.4.17'],
      },
      mailTemplate: {
        name: 'mailTemplate',
        description: 'MailTemplateProvider',
        instance: () => new CreateMailTemplateProvider(this.fatherNames),
        dependencies: ['handlebars@^4.7.8'],
        devDependencies: [],
      },
      notification: {
        name: 'notification',
        description: 'NotificationProvider',
        instance: () => new CreateNotificationProvider(this.fatherNames),
        dependencies: ['axios@^1.9.0', 'google-auth-library@^10.3.0'],
        devDependencies: [],
      },
      queue: {
        name: 'queue',
        description: 'QueueProvider',
        instance: () => new CreateQueueProvider(this.fatherNames),
        dependencies: ['bee-queue@^1.7.1', 'bull@^4.16.5', 'kue@^0.11.6'],
        devDependencies: ['@types/kue@^0.11.17'],
      },
      storage: {
        name: 'storage',
        description: 'StorageProvider',
        instance: () => new CreateStorageProvider(this.fatherNames),
        dependencies: [
          '@aws-sdk/client-s3@^3.821.0',
          'mime@^3.0.0',
          'multer@^2.0.0',
        ],
        devDependencies: ['@types/mime@^3.0.1', '@types/multer@^1.4.12'],
      },
    });
  }
}
