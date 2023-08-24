import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateDependentSESMail {
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    if (!this.fatherNames) {
      this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { mailConfig } from '@config/mail';

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { injectable, inject } from 'tsyringe';

import { IMailTemplateProviderDTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider';

import { ISendMailDTO } from '../dtos/ISendMailDTO';
import { IMailProviderDTO } from '../models/IMailProvider';

@injectable()
export class SESMailProvider implements IMailProviderDTO {
  private readonly client: SESClient;

  constructor(
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
    const { email } = mailConfig.defaults.from;

    const content = await this.mailTemplateProvider.parse(templateData);

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
