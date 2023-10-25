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
import { IModuleNamesDTO } from '@tools/names';

export class Provider {
  public readonly key: 'dependent' | 'independent';
  public readonly list: Record<
    string,
    {
      name: string;
      description: string;
      dependent: { execute: () => void };
      independent: { execute: () => void };
    }
  >;

  constructor(
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    if (fatherNames) {
      this.key = 'dependent';
    } else {
      this.key = 'independent';
    }

    this.list = {
      cache: {
        name: 'cache       ',
        description: 'CacheProvider       ',
        independent: new MakeCacheProvider(),
        dependent: new MakeDependentCacheProvider(this.fatherNames),
      },
      crypto: {
        name: 'crypto      ',
        description: 'CryptoProvider      ',
        independent: new MakeCryptoProvider(),
        dependent: new MakeDependentCryptoProvider(this.fatherNames),
      },
      hash: {
        name: 'hash        ',
        description: 'HashProvider        ',
        independent: new MakeHashProvider(),
        dependent: new MakeDependentHashProvider(this.fatherNames),
      },
      lead: {
        name: 'lead        ',
        description: 'leadProvider        ',
        independent: new MakeLeadProvider(),
        dependent: new MakeDependentLeadProvider(this.fatherNames),
      },
      mail: {
        name: 'mail        ',
        description: 'MailProvider        ',
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
      },
      mailTemplate: {
        name: 'mailTemplate',
        description: 'MailTemplateProvider',
        independent: new MakeMailTemplateProvider(),
        dependent: new MakeDependentMailTemplateProvider(this.fatherNames),
      },
      queue: {
        name: 'queue       ',
        description: 'QueueProvider       ',
        independent: new MakeQueueProvider(),
        dependent: new MakeDependentQueueProvider(this.fatherNames),
      },
      notification: {
        name: 'notification',
        description: 'NotificationProvider',
        independent: new MakeNotificationProvider(),
        dependent: new MakeDependentNotificationProvider(this.fatherNames),
      },
      upload: {
        name: 'upload      ',
        description: 'StorageProvider     ',
        independent: new MakeStorageProvider(),
        dependent: new MakeDependentStorageProvider(this.fatherNames),
      },
    };
  }
}
