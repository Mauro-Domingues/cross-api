export class CreateMailIndex {
  public execute(): string {
    return `import { mailConfig } ${'from'} '@config/mail';
import { container } ${'from'} 'tsyringe';
import { NodemailerMailProvider } ${'from'} './implementations/NodemailerMailProvider';
import { SESMailProvider } ${'from'} './implementations/SESMailProvider';
import { IMailProvider } ${'from'} './models/IMailProvider';

const providers: Record<typeof mailConfig.driver, () => IMailProvider> = {
  nodemailer: () => container.resolve(NodemailerMailProvider),
  ses: () => container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver](),
);
`;
  }
}
