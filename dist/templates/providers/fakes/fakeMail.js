"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFakeMail = void 0;
class CreateFakeMail {
  execute() {
    return `import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProvider from '../models/IMailProvider';

class FakeMailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}

export default FakeMailProvider;
`;
  }
}
exports.CreateFakeMail = CreateFakeMail;