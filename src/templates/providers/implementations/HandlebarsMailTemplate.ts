export class CreateHandlebarsMailTemplate {
  public execute(): string {
    return `import Handlebars fr\om 'handlebars';
import { readFileSync } fr\om 'node:fs';
import type { IMailTemplateFragmentDTO } fr\om '../dtos/IMailTemplateFragmentDTO';
import type { IParseMailTemplateDTO } fr\om '../dtos/IParseMailTemplateDTO';
import type { IMailTemplateProvider } fr\om '../models/IMailTemplateProvider';

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
