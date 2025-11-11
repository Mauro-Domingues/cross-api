export class CreateMailIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { mailConfig } fr\om '@config/mail';
import { SESMailProvider } fr\om './implementations/SESMailProvider';
import { SMTPMailProvider } fr\om './implementations/SMTPMailProvider';
import type { IMailProvider } fr\om './models/IMailProvider';

const providers: Record<typeof mailConfig.driver, () => IMailProvider> = {
  smtp: () => container.resolve(SMTPMailProvider),
  ses: () => container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver](),
);
`;
  }
}
