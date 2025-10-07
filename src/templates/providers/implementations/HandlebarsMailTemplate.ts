export class CreateHandlebarsMailTemplate {
  public execute(): string {
    return `import { readFileSync } fr\om 'node:fs';
import Handlebars fr\om 'handlebars';
import { IParseMailTemplateDTO } fr\om '../dtos/IParseMailTemplateDTO';
import { IMailTemplateProvider } fr\om '../models/IMailTemplateProvider';
import { IMailTemplateFragmentDTO } fr\om '../dtos/IMailTemplateFragmentDTO';

export class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  private parseTemplate({ file, variables }: IMailTemplateFragmentDTO): string {
    const templateFileContent = readFileSync(file, {
      encoding: 'utf-8',
    });

    const template = Handlebars.compile(templateFileContent);

    return template(variables);
  }

  private registerPartial(partials: IParseMailTemplateDTO['partials']): void {
    partials.forEach(partial => {
      const parsedPartialTemplate = this.parseTemplate(partial);

      Handlebars.registerPartial(partial.name, parsedPartialTemplate);
    });
  }

  public compile({ file, variables, partials }: IParseMailTemplateDTO): string {
    this.registerPartial(partials);

    return this.parseTemplate({ file, variables });
  }
}
`;
  }
}
