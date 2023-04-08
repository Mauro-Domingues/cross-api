export class CreateMailIndex {
  public execute(): string {
    return `import { mailConfig } from '@config/mail';
import { container } from 'tsyringe';

import { EtherealMailProvider } from './implementations/EtherealMailProvider';
import { SESMailProvider } from './implementations/SESMailProvider';
import { IMailProviderDTO } from './models/IMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProviderDTO>(
  'MailProvider',
  providers[mailConfig.driver],
);
`;
  }
}
