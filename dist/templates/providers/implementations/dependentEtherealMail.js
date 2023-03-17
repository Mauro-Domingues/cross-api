"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDependentEtherealMail = void 0;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateDependentEtherealMail {
  constructor(fatherNames) {
    this.fatherNames = void 0;
    this.messages = void 0;
    this.fatherNames = fatherNames;
    this.messages = _messages.default;
  }
  execute() {
    if (!this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import nodemailer, { Transporter } from 'nodemailer';
import { injectable, inject } from 'tsyringe';

import IMailTemplateProvider from '@modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider';

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
exports.CreateDependentEtherealMail = CreateDependentEtherealMail;