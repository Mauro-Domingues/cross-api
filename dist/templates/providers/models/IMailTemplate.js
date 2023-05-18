export class CreateIMailTemplate {
    execute() {
        return `import { IParseMailTemplateDTO } from '../dtos/IParseMailTemplateDTO';

export interface IMailTemplateProviderDTO {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
`;
    }
}
