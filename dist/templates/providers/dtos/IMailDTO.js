export class CreateIMailDTO {
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
