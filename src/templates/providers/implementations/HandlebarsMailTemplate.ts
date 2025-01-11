export class CreateHandlebarsMailTemplate {
  public execute(): string {
    return `import { readFileSync } ${'from'} 'node:fs';
import Handlebars ${'from'} 'handlebars';
import { IParseMailTemplateDTO } ${'from'} '../dtos/IParseMailTemplateDTO';
import { IMailTemplateProvider } ${'from'} '../models/IMailTemplateProvider';

export class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public registerPartial({
    name,
    file,
    variables,
  }: IParseMailTemplateDTO): void {
    const templateFileContent = readFileSync(file, {
      encoding: 'utf-8',
    });

    const partialTemplate = Handlebars.compile(templateFileContent);
    const parsedPartialTemplate = partialTemplate(variables);

    Handlebars.registerPartial(name, parsedPartialTemplate);
  }

  public parse({
    file,
    variables,
  }: Omit<IParseMailTemplateDTO, 'name'>): string {
    const templateFileContent = readFileSync(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = Handlebars.compile(templateFileContent, {
      compat: true,
    });

    return parseTemplate(variables);
  }
}
`;
  }
}
