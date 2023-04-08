"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFakeMail = void 0;
class CreateFakeMail {
  execute() {
    return `import { ISendMailDTO } from '../dtos/ISendMailDTO';
import { IMailProviderDTO } from '../models/IMailProvider';

export class FakeMailProvider implements IMailProviderDTO {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
`;
  }
}
exports.CreateFakeMail = CreateFakeMail;