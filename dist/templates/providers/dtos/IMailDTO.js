"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIMailDTO = createIMailDTO;
function createIMailDTO() {
  return `import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
`;
}