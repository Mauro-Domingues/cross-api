export class CreateMailIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { mailConfig } fr\om '@config/mail';
import { SESProvider } fr\om './implementations/SESProvider';
import { SMTPProvider } fr\om './implementations/SMTPProvider';
import type { IMailProvider } fr\om './models/IMailProvider';

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
