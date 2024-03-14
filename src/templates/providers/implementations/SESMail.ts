export class CreateSESMail {
  public execute(): string {
    return `import { mailConfig } ${'from'} '@config/mail';
import { SESClient, SendEmailCommand } ${'from'} '@aws-sdk/client-ses';
import { injectable, inject } ${'from'} 'tsyringe';
import { IMailTemplateProviderDTO } ${'from'} '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider';
import { ISendMailDTO } ${'from'} '../dtos/ISendMailDTO';
import { IMailProviderDTO } ${'from'} '../models/IMailProvider';

@injectable()
export class SESMailProvider implements IMailProviderDTO {
  private readonly client: SESClient;

  public constructor(
    @inject('MailTemplateProvider')
    private readonly mailTemplateProvider: IMailTemplateProviderDTO,
  ) {
    this.client = new SESClient({
      credentials: {
        accessKeyId: mailConfig.config.user,
        secretAccessKey: mailConfig.config.password,
      },
      region: mailConfig.config.region,
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const { email } = mailConfig.config.defaults.from;

    const content = this.mailTemplateProvider.parse(templateData);

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
