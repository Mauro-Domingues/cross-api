export class CreateNodemailerMail {
  public execute(): string {
    return `import { Transporter, createTransport, getTestMessageUrl } ${'from'} 'nodemailer';
import { injectable, inject } ${'from'} 'tsyringe';
import { IMailTemplateProvider } ${'from'} '../../MailTemplateProvider/models/IMailTemplateProvider';
import { mailConfig } ${'from'} '@config/mail';
import { ISendMailDTO } ${'from'} '../dtos/ISendMailDTO';
import { IMailProvider } ${'from'} '../models/IMailProvider';

@injectable()
export class NodemailerMailProvider implements IMailProvider {
  private client: Transporter;

  public constructor(
    @inject('MailTemplateProvider')
    private readonly mailTemplateProvider: IMailTemplateProvider,
  ) {}

  private async createClient(): Promise<void> {
    this.client = createTransport({
      host: mailConfig.config.host,
      port: mailConfig.config.port,
      secure: mailConfig.config.secure,
      auth: {
        user: mailConfig.config.user,
        pass: mailConfig.config.password,
      },
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    await this.createClient();

    const { email, name } = mailConfig.config.defaults.from;

    const content = this.mailTemplateProvider.parse(templateData);

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
