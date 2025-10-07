export class CreateFakeMail {
  public execute(): string {
    return `import {
  Transporter,
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} fr\om 'nodemailer';
import { mailConfig } fr\om '@config/mail';
import { inject, injectable } fr\om 'tsyringe';
import { ISendMailDTO } fr\om '../dtos/ISendMailDTO';
import { IMailProvider } fr\om '../models/IMailProvider';
import { IMailTemplateProvider } fr\om '../../MailTemplateProvider/models/IMailTemplateProvider';

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
