import { MakeDependentCacheProvider } from '@tools/makeProvider/dependent/cache';
import { MakeDependentCryptoProvider } from '@tools/makeProvider/dependent/crypto';
import { MakeDependentHashProvider } from '@tools/makeProvider/dependent/hash';
import { MakeDependentLeadProvider } from '@tools/makeProvider/dependent/lead';
import { MakeDependentMailProvider } from '@tools/makeProvider/dependent/mail';
import { MakeDependentMailTemplateProvider } from '@tools/makeProvider/dependent/mailTemplate';
import { MakeDependentNotificationProvider } from '@tools/makeProvider/dependent/notification';
import { MakeDependentQueueProvider } from '@tools/makeProvider/dependent/queue';
import { MakeDependentStorageProvider } from '@tools/makeProvider/dependent/storage';
import { MakeCacheProvider } from '@tools/makeProvider/independent/cache';
import { MakeCryptoProvider } from '@tools/makeProvider/independent/crypto';
import { MakeHashProvider } from '@tools/makeProvider/independent/hash';
import { MakeLeadProvider } from '@tools/makeProvider/independent/lead';
import { MakeMailProvider } from '@tools/makeProvider/independent/mail';
import { MakeMailTemplateProvider } from '@tools/makeProvider/independent/mailTemplate';
import { MakeNotificationProvider } from '@tools/makeProvider/independent/notification';
import { MakeQueueProvider } from '@tools/makeProvider/independent/queue';
import { MakeStorageProvider } from '@tools/makeProvider/independent/storage';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IProviderOptionDTO } from '@interfaces/IProviderOptionDTO';

export class Provider {
  public readonly key: 'dependent' | 'independent';
  public readonly list: Record<
    IProviderOptionDTO,
    {
      readonly independent: { readonly execute: () => void };
      readonly dependent: { readonly execute: () => void };
      readonly devDependencies: Array<string>;
      readonly dependencies: Array<string>;
      readonly description: string;
      readonly name: IProviderOptionDTO;
    }
  >;

  public constructor(
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    if (fatherNames) {
      this.key = 'dependent';
    } else {
      this.key = 'independent';
    }

    this.list = Object.freeze({
      cache: {
        name: 'cache',
        description: 'CacheProvider',
        independent: new MakeCacheProvider(),
        dependent: new MakeDependentCacheProvider(this.fatherNames),
        dependencies: [],
        devDependencies: [],
      },
      crypto: {
        name: 'crypto',
        description: 'CryptoProvider',
        independent: new MakeCryptoProvider(),
        dependent: new MakeDependentCryptoProvider(this.fatherNames),
        dependencies: ['jsonwebtoken', 'pem-jwk'],
        devDependencies: ['@types/jsonwebtoken', '@types/pem-jwk'],
      },
      hash: {
        name: 'hash',
        description: 'HashProvider',
        independent: new MakeHashProvider(),
        dependent: new MakeDependentHashProvider(this.fatherNames),
        dependencies: ['bcrypt'],
        devDependencies: ['@types/bcrypt'],
      },
      lead: {
        name: 'lead',
        description: 'leadProvider',
        independent: new MakeLeadProvider(),
        dependent: new MakeDependentLeadProvider(this.fatherNames),
        dependencies: [],
        devDependencies: [],
      },
      mail: {
        name: 'mail',
        description: 'MailProvider',
        independent: {
          execute: (): void => {
            new MakeMailTemplateProvider().execute();
            return new MakeMailProvider().execute();
          },
        },
        dependent: {
          execute: (): void => {
            new MakeDependentMailTemplateProvider(this.fatherNames).execute();
            return new MakeDependentMailProvider(this.fatherNames).execute();
          },
        },
        dependencies: ['@aws-sdk/client-ses', 'handlebars', 'nodemailer'],
        devDependencies: ['@types/nodemailer'],
      },
      mailTemplate: {
        name: 'mailTemplate',
        description: 'MailTemplateProvider',
        independent: new MakeMailTemplateProvider(),
        dependent: new MakeDependentMailTemplateProvider(this.fatherNames),
        dependencies: ['handlebars'],
        devDependencies: [],
      },
      queue: {
        name: 'queue',
        description: 'QueueProvider',
        independent: new MakeQueueProvider(),
        dependent: new MakeDependentQueueProvider(this.fatherNames),
        dependencies: ['bee-queue', 'bull', 'kue'],
        devDependencies: ['@types/kue'],
      },
      notification: {
        name: 'notification',
        description: 'NotificationProvider',
        independent: new MakeNotificationProvider(),
        dependent: new MakeDependentNotificationProvider(this.fatherNames),
        dependencies: [],
        devDependencies: [],
      },
      storage: {
        name: 'storage',
        description: 'StorageProvider',
        independent: new MakeStorageProvider(),
        dependent: new MakeDependentStorageProvider(this.fatherNames),
        dependencies: ['@aws-sdk/client-s3', 'mime@^3.0.0', 'multer'],
        devDependencies: ['@types/mime@^3.0.1', '@types/multer'],
      },
    });
  }
}
