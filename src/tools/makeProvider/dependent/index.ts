import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { makeDependentCacheProvider } from './cache';
import { makeDependentCryptoProvider } from './crypto';
import { makeDependentHashProvider } from './hash';
import { makeDependentLeadProvider } from './lead';
import { makeDependentMailProvider } from './mail';
import { makeDependentMailTemplateProvider } from './mailTemplate';
import { makeDependentNotificationProvider } from './notification';
import { makeDependentStorageProvider } from './storage';

export async function makeDependentProvider(
  providerName: string,
  fatherNames: IModuleNamesDTO,
): Promise<void> {
  switch (providerName) {
    case 'cache':
      makeDependentCacheProvider(fatherNames);
      break;
    case 'storage':
      makeDependentStorageProvider(fatherNames);
      break;
    case 'mailTemplate':
      makeDependentMailTemplateProvider(fatherNames);
      break;
    case 'mail':
      makeDependentMailProvider(fatherNames);
      break;
    case 'notification':
      makeDependentNotificationProvider(fatherNames);
      break;
    case 'lead':
      makeDependentLeadProvider(fatherNames);
      break;
    case 'crypto':
      makeDependentCryptoProvider(fatherNames);
      break;
    case 'hash':
      makeDependentHashProvider(fatherNames);
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
