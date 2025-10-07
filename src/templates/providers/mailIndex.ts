export class CreateMailIndex {
  public execute(): string {
    return `import { mailConfig } fr\om '@config/mail';
import { container } fr\om 'tsyringe';
import { SMTPMailProvider } fr\om './implementations/SMTPMailProvider';
import { SESMailProvider } fr\om './implementations/SESMailProvider';
import { IMailProvider } fr\om './models/IMailProvider';

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
