export class CreateMailIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { mailConfig } fr\u006Fm '@config/mail';
import { SESProvider } fr\u006Fm './implementations/SESProvider';
import { SMTPProvider } fr\u006Fm './implementations/SMTPProvider';
import type { IMailProvider } fr\u006Fm './models/IMailProvider';

const providers: Record<typeof mailConfig.driver, () => IMailProvider> = {
  smtp: () => container.resolve(SMTPProvider),
  ses: () => container.resolve(SESProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver](),
);
`;
  }
}
