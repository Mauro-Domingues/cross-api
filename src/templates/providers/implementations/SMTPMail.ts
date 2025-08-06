export class CreateSMTPMail {
  public execute(): string {
    return `import { Transporter, createTransport } ${'from'} 'nodemailer';
import { injectable, inject } ${'from'} 'tsyringe';
import { mailConfig } ${'from'} '@config/mail';
import { IMailTemplateProvider } ${'from'} '../../MailTemplateProvider/models/IMailTemplateProvider';
import { ISendMailDTO } ${'from'} '../dtos/ISendMailDTO';
import { IMailProvider } ${'from'} '../models/IMailProvider';

@injectable()
export class SMTPMailProvider implements IMailProvider {
  private readonly client: Transporter;

  public constructor(
    @inject('MailTemplateProvider')
    private readonly mailTemplateProvider: IMailTemplateProvider,
  ) {
    this.client = createTransport({
      host: mailConfig.config.smtp.host,
      port: mailConfig.config.smtp.port,
      secure: mailConfig.config.smtp.secure,
      auth: {
        user: mailConfig.config.smtp.user,
        pass: mailConfig.config.smtp.password,
      },
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const { email, name } = mailConfig.config.default.from;

    const content = this.mailTemplateProvider.compile(templateData);

    await this.client.sendMail({
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
  }
}
`;
  }
}
