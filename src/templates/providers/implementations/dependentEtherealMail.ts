import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateDependentEtherealMail {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: IMessagesDTO;

  constructor(
    fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
  }

  public execute(): string {
    if (!this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.providerNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    return `import nodemailer, { Transporter } from 'nodemailer';
import { injectable, inject } from 'tsyringe';

import IMailTemplateProvider from '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/providers/MailTemplateProvider/models/IMailTemplateProvider';

import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProvider from '../models/IMailProvider';

@injectable()
class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    this.createClient();
  }

  private async createClient(): Promise<void> {
    try {
      const account = await nodemailer.createTestAccount();

      this.client = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
    } catch (err) {
      console.error(\`EtherealMailProvider - Error:\\${'n'}\${err}\`);
    }
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    if (!this.client) {
      await this.createClient();
    }

    const message = await this.client.sendMail({
      from: {
        name: from?.name || 'Administrator',
        address: from?.email || 'no-reply@admin.com.br',
      },
      to: {
        name: to.name,
        address: to.email || 'no-reply@admin.com.br',
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default EtherealMailProvider;
`;
  }
}
