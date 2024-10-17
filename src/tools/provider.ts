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
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.list = Object.freeze<IProviderListDTO>({
      cache: {
        name: 'cache',
        description: 'CacheProvider',
        instance: () => new CreateCacheProvider(this.fatherNames),
        dependencies: [],
        devDependencies: [],
      },
      crypto: {
        name: 'crypto',
        description: 'CryptoProvider',
        instance: () => new CreateCryptoProvider(this.fatherNames),
        dependencies: ['jsonwebtoken', 'pem-jwk'],
        devDependencies: ['@types/jsonwebtoken', '@types/pem-jwk'],
      },
      hash: {
        name: 'hash',
        description: 'HashProvider',
        instance: () => new CreateHashProvider(this.fatherNames),
        dependencies: ['bcrypt'],
        devDependencies: ['@types/bcrypt'],
      },
      lead: {
        name: 'lead',
        description: 'leadProvider',
        instance: () => new CreateLeadProvider(this.fatherNames),
        dependencies: [],
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
        dependencies: ['@aws-sdk/client-ses', 'handlebars', 'nodemailer'],
        devDependencies: ['@types/nodemailer'],
      },
      mailTemplate: {
        name: 'mailTemplate',
        description: 'MailTemplateProvider',
        instance: () => new CreateMailTemplateProvider(this.fatherNames),
        dependencies: ['handlebars'],
        devDependencies: [],
      },
      notification: {
        name: 'notification',
        description: 'NotificationProvider',
        instance: () => new CreateNotificationProvider(this.fatherNames),
        dependencies: [],
        devDependencies: [],
      },
      queue: {
        name: 'queue',
        description: 'QueueProvider',
        instance: () => new CreateQueueProvider(this.fatherNames),
        dependencies: ['bee-queue', 'bull', 'kue'],
        devDependencies: ['@types/kue'],
      },
      storage: {
        name: 'storage',
        description: 'StorageProvider',
        instance: () => new CreateStorageProvider(this.fatherNames),
        dependencies: ['@aws-sdk/client-s3', 'mime@^3.0.0', 'multer'],
        devDependencies: ['@types/mime@^3.0.1', '@types/multer'],
      },
    });
  }
}
