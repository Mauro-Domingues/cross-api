export class CreateIMailDTO {
  public execute(): string {
    return `import type { IParseMailTemplateDTO } fr\u006Fm '../../MailTemplateProvider/dtos/IParseMailTemplateDTO';

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
