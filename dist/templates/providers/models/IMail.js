"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateIMail = void 0;
class CreateIMail {
  execute() {
    return `import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
`;
  }
}
exports.CreateIMail = CreateIMail;