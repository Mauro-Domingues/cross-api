import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateDependentNodemailerMail {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.fatherNames) {
      throw this.console.one({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import {
  Transporter,
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} ${'from'} 'nodemailer';
import { injectable, inject } ${'from'} 'tsyringe';

import { IMailTemplateProviderDTO } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/providers/MailTemplateProvider/models/IMailTemplateProvider';

import { mailConfig } ${'from'} '@config/mail';
import { ISendMailDTO } ${'from'} '../dtos/ISendMailDTO';
import { IMailProviderDTO } ${'from'} '../models/IMailProvider';

@injectable()
export class NodemailerMailProvider implements IMailProviderDTO {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private readonly mailTemplateProvider: IMailTemplateProviderDTO,
  ) {}

  private async createClient(): Promise<void> {
    const account = await createTestAccount();

    this.client = createTransport({
      host: mailConfig.config.host || account.smtp.host,
      port: mailConfig.config.port || account.smtp.port,
      secure: process.env.MAIL_SECURE
        ? mailConfig.config.secure
        : account.smtp.secure,
      auth: {
        user: mailConfig.config.user || account.user,
        pass: mailConfig.config.password || account.pass,
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
