import messages from '@tools/messages';
import makeDependentCacheProvider from './cache';
import makeDependentCryptoProvider from './crypto';
import makeDependentHashProvider from './hash';
import makeDependentLeadProvider from './lead';
import makeDependentMailProvider from './mail';
import makeDependentMailTemplateProvider from './mailTemplate';
import makeDependentStorageProvider from './storage';

export default async function makeDependentProvider(
  providerName: string,
  fatherData: { [key: string]: string },
): Promise<void> {
  switch (providerName) {
    case 'cache':
      makeDependentCacheProvider(fatherData);
      break;
    case 'storage':
      makeDependentStorageProvider(fatherData);
      break;
    case 'mailTemplate':
      makeDependentMailTemplateProvider(fatherData);
      break;
    case 'mail':
      makeDependentMailProvider(fatherData);
      break;
    case 'notification':
      makeDependentMailProvider(fatherData);
      break;
    case 'lead':
      makeDependentLeadProvider(fatherData);
      break;
    case 'crypto':
      makeDependentCryptoProvider(fatherData);
      break;
    case 'hash':
      makeDependentHashProvider(fatherData);
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
