import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class CreateDependentSESMail {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: IMessagesDTO;
  private console: Console;

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

import { SESClient } from '@aws-sdk/client-ses';
import { createTransport, Transporter } from 'nodemailer';
import { injectable, inject } from 'tsyringe';

import { IMailTemplateProviderDTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider';

import { ISendMailDTO } from '../dtos/ISendMailDTO';
import { IMailProviderDTO } from '../models/IMailProvider';

@injectable()
export class SESMailProvider implements IMailProviderDTO {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProviderDTO,
  ) {
    this.client = createTransport({
      SES: new SESClient({
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
        region: process.env.AWS_REGION,
      }),
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const { email, name } = mailConfig.defaults.from;

    await this.client.sendMail({
      from: {
        name: from?.name || name,
        address: from?.email || email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });
  }
}
`;
  }
}
