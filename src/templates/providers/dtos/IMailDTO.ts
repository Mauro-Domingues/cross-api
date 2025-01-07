export class CreateIMailDTO {
  public execute(): string {
    return `import { IParseMailTemplateDTO } ${'from'} '../../MailTemplateProvider/dtos/IParseMailTemplateDTO';

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
