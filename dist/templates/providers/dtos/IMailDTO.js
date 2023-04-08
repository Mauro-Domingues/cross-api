"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateIMailDTO = void 0;
class CreateIMailDTO {
  execute() {
    return `import { IParseMailTemplateDTO } from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContactDTO {
  name: string;
  email: string;
}

export interface ISendMailDTO {
  to: IMailContactDTO;
  from?: IMailContactDTO;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
`;
  }
}
exports.CreateIMailDTO = CreateIMailDTO;