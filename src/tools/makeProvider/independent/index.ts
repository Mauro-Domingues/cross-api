import messages from '@tools/messages';
import makeCacheProvider from './cache';
import makeCryptoProvider from './crypto';
import makeHashProvider from './hash';
import makeLeadProvider from './lead';
import makeMailProvider from './mail';
import makeMailTemplateProvider from './mailTemplate';
import makeNotificationProvider from './notification';
import makeStorageProvider from './storage';

export default async function makeProvider(
  providerName: string,
): Promise<void> {
  switch (providerName) {
    case 'cache':
      makeCacheProvider();
      break;
    case 'storage':
      makeStorageProvider();
      break;
    case 'mailTemplate':
      makeMailTemplateProvider();
      break;
    case 'mail':
      makeMailProvider();
      break;
    case 'notification':
      makeNotificationProvider();
      break;
    case 'lead':
      makeLeadProvider();
      break;
    case 'crypto':
      makeCryptoProvider();
      break;
    case 'hash':
      makeHashProvider();
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
