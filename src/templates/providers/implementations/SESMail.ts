export class CreateSESMail {
  public execute(): string {
    return `import { mailConfig } ${'from'} '@config/mail';
import { SESClient, SendEmailCommand } ${'from'} '@aws-sdk/client-ses';
import { injectable, inject } ${'from'} 'tsyringe';
import { IMailTemplateProvider } ${'from'} '../../MailTemplateProvider/models/IMailTemplateProvider';
import { ISendMailDTO } ${'from'} '../dtos/ISendMailDTO';
import { IMailProvider } ${'from'} '../models/IMailProvider';

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
    const { email } = mailConfig.config.defaults.from;

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
