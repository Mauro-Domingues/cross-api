export class CreateSESMail {
  public execute(): string {
    return `import { SendEmailCommand, SESClient } fr\om '@aws-sdk/client-ses';
import { inject, injectable } fr\om 'tsyringe';
import { mailConfig } fr\om '@config/mail';
import type { IMailTemplateProvider } fr\om '../../MailTemplateProvider/models/IMailTemplateProvider';
import type { ISendMailDTO } fr\om '../dtos/ISendMailDTO';
import type { IMailProvider } fr\om '../models/IMailProvider';

@injectable()
export class SESMailProvider implements IMailProvider {
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

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const { email } = mailConfig.config.default.from;

    const content = this.mailTemplateProvider.compile(templateData);

    await this.client.send(
      new SendEmailCommand({
        Destination: {
          ToAddresses: [to.email],
        },
        Message: {
          Body: {
            Html: {
              Charset: 'UTF-8',
              Data: content,
            },
          },
          Subject: { Charset: 'UTF-8', Data: subject },
        },
        Source: from?.email ?? email,
        ReturnPath: email,
      }),
    );
  }
}
`;
  }
}
