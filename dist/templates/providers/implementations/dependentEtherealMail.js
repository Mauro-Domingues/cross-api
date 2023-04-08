"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDependentEtherealMail = void 0;
var _messages = require("../../../../dist/tools/messages");
class CreateDependentEtherealMail {
  constructor(fatherNames) {
    this.fatherNames = void 0;
    this.messages = void 0;
    this.fatherNames = fatherNames;
    this.messages = new _messages.Messages().execute();
  }
  execute() {
    if (!this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import {
  Transporter,
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} from 'nodemailer';
import { injectable, inject } from 'tsyringe';

import { IMailTemplateProviderDTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider';

import { mailConfig } from '@config/mail';
import { ISendMailDTO } from '../dtos/ISendMailDTO';
import { IMailProviderDTO } from '../models/IMailProvider';

@injectable()
export class EtherealMailProvider implements IMailProviderDTO {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProviderDTO,
  ) {
    this.createClient();
  }

  private async createClient(): Promise<void> {
    const account = await createTestAccount();

    this.client = createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
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

    const { email, name } = mailConfig.defaults.from;

    const message = await this.client.sendMail({
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

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', getTestMessageUrl(message));
  }
}
`;
  }
}
exports.CreateDependentEtherealMail = CreateDependentEtherealMail;