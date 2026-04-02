export class CreateHandlebarsMailTemplate {
  public execute(): string {
    return `import Handlebars fr\u006Fm 'handlebars';
import { readFileSync } fr\u006Fm 'node:fs';
import type { IMailTemplateFragmentDTO } fr\u006Fm '../dtos/IMailTemplateFragmentDTO';
import type { IParseMailTemplateDTO } fr\u006Fm '../dtos/IParseMailTemplateDTO';
import type { IMailTemplateProvider } fr\u006Fm '../models/IMailTemplateProvider';

export class HandlebarsProvider implements IMailTemplateProvider {
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
