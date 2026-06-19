export class CreateSESMail {
  public execute(): string {
    return `import { SendEmailCommand, SESClient } fr\u006Fm '@aws-sdk/client-ses';
import { inject, injectable } fr\u006Fm 'tsyringe';
import { resolve } fr\u006Fm 'node:path';
import { mailConfig } fr\u006Fm '@config/mail';
import type { IMailTemplateProvider } fr\u006Fm '../../MailTemplateProvider/models/IMailTemplateProvider';
import type { IMailContactDTO } fr\u006Fm '../dtos/IMailContactDTO';
import type { ISendMailDTO } fr\u006Fm '../dtos/ISendMailDTO';
import type { IMailProvider } fr\u006Fm '../models/IMailProvider';

@injectable()
export class SESProvider implements IMailProvider {
  private readonly client: SESClient;

  public constructor(
    @inject('MailTemplateProvider')
    private readonly mailTemplateProvider: IMailTemplateProvider,
  ) {
    this.client = new SESClient({
      credentials: {
        accessKeyId: mailConfig.config.ses.user,
        secretAccessKey: mailConfig.config.ses.password,
      },
      region: mailConfig.config.ses.region,
    });
  }

  private formatEmailAddress({ email, name }: IMailContactDTO): string {
    return name ? \`"\${name}" <\${email}>\` : email;
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

    const formattedFrom = this.formatEmailAddress(
      mailConfig.config.default.from,
    );
    const formattedReplyTo = this.formatEmailAddress(
      from?.email ? from : mailConfig.config.default.from,
    );
    const formattedTo = this.formatEmailAddress(to);

    await this.client.send(
      new SendEmailCommand({
        Source: formattedFrom,
        ReplyToAddresses: [formattedReplyTo],
        Destination: { ToAddresses: [formattedTo] },
        Message: {
          Body: {
            Html: { Charset: 'UTF-8', Data: html },
            Text: { Charset: 'UTF-8', Data: plain },
          },
          Subject: { Charset: 'UTF-8', Data: subject },
        },
      }),
    );
  }
}
`;
  }
}
