export class CreateHandlebarsMailTemplate {
  public execute(): string {
    return `import { readFileSync } ${'from'} 'node:fs';
import { compile } ${'from'} 'handlebars';

import { IParseMailTemplateDTO } ${'from'} '../dtos/IParseMailTemplateDTO';
import { IMailTemplateProviderDTO } ${'from'} '../models/IMailTemplateProvider';

export class HandlebarsMailTemplateProvider
  implements IMailTemplateProviderDTO
{
  public parse({ file, variables }: IParseMailTemplateDTO): string {
    const templateFileContent = readFileSync(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = compile(templateFileContent);

    return parseTemplate(variables);
  }
}
`;
  }
}
