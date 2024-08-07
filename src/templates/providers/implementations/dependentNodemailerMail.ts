import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class CreateDependentNodemailerMail {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = Messages.getInstance().execute();
  }

  public execute(): string {
    if (!this.fatherNames) {
      throw new CustomError({
        message: this.messages.providers.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import {
  Transporter,
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} ${'from'} 'nodemailer';
import { injectable, inject } ${'from'} 'tsyringe';
import { IMailTemplateProvider } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/providers/MailTemplateProvider/models/IMailTemplateProvider';
import { mailConfig } ${'from'} '@config/mail';
import { ISendMailDTO } ${'from'} '../dtos/ISendMailDTO';
import { IMailProvider } ${'from'} '../models/IMailProvider';

@injectable()
export class NodemailerMailProvider implements IMailProvider {
  private client: Transporter;

  public constructor(
    @inject('MailTemplateProvider')
    private readonly mailTemplateProvider: IMailTemplateProvider,
  ) {}

  private async createClient(): Promise<void> {
    const account = await createTestAccount();

    this.client = createTransport({
      host: mailConfig.config.host || account.smtp.host,
      port: mailConfig.config.port || account.smtp.port,
      secure: mailConfig.config.secure ?? account.smtp.secure,
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
