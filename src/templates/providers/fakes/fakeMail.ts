export class CreateFakeMail {
  public execute(): string {
    return `import {
  Transporter,
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} ${'from'} 'nodemailer';
import { mailConfig } ${'from'} '@config/mail';
import { inject, injectable } ${'from'} 'tsyringe';
import { ISendMailDTO } ${'from'} '../dtos/ISendMailDTO';
import { IMailProvider } ${'from'} '../models/IMailProvider';
import { IMailTemplateProvider } ${'from'} '../../MailTemplateProvider/models/IMailTemplateProvider';

@injectable()
export class FakeMailProvider implements IMailProvider {
  private client: Transporter;

  public constructor(
    @inject('MailTemplateProvider')
    private readonly mailTemplateProvider: IMailTemplateProvider,
  ) {}

  private async createFakeClient(): Promise<void> {
    const account = await createTestAccount();

    this.client = createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    if (!this.client) await this.createFakeClient();

    const { email, name } = mailConfig.config.default.from;

    const content = this.mailTemplateProvider.compile(templateData);

    const message = await this.client.sendMail({
      from: {
        name: from?.name ?? name,
        address: from?.email ?? email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: content,
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', getTestMessageUrl(message));
  }
}
`;
  }
}
