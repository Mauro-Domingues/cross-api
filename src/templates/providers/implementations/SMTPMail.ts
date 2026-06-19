export class CreateSMTPMail {
  public execute(): string {
    return `import type { Transporter } fr\u006Fm 'nodemailer';
import { createTransport } fr\u006Fm 'nodemailer';
import { inject, injectable } fr\u006Fm 'tsyringe';
import { resolve } fr\u006Fm 'node:path';
import { mailConfig } fr\u006Fm '@config/mail';
import type { IMailTemplateProvider } fr\u006Fm '../../MailTemplateProvider/models/IMailTemplateProvider';
import type { ISendMailDTO } fr\u006Fm '../dtos/ISendMailDTO';
import type { IMailProvider } fr\u006Fm '../models/IMailProvider';

@injectable()
export class SMTPProvider implements IMailProvider {
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
    const [plain, html] = ['plain', 'html'].map(type =>
      this.mailTemplateProvider.compile({
        ...templateData,
        file: resolve(mailConfig.config.viewsPath, type, templateData.file),
      }),
    );

    const { email, name } = mailConfig.config.default.from;

    await this.client.sendMail({
      from: { name, address: email },
      replyTo: { name: from?.name ?? name, address: from?.email ?? email },
      to: { name: to.name, address: to.email },
      subject,
      text: plain,
      html,
    });
  }
}
`;
  }
}
