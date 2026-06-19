export class CreateIMailDTO {
  public execute(): string {
    return `import type { IParseMailTemplateDTO } fr\u006Fm '../../MailTemplateProvider/dtos/IParseMailTemplateDTO';
import type { IMailContactDTO } fr\u006Fm './IMailContactDTO';

export interface ISendMailDTO {
  to: IMailContactDTO;
  from?: IMailContactDTO;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
`;
  }
}
