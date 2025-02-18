export class CreateHandlebarsMailTemplate {
  public execute(): string {
    return `import { readFileSync } ${'from'} 'node:fs';
import Handlebars ${'from'} 'handlebars';
import { IParseMailTemplateDTO } ${'from'} '../dtos/IParseMailTemplateDTO';
import { IMailTemplateProvider } ${'from'} '../models/IMailTemplateProvider';
import { IMailTemplateFragmentDTO } ${'from'} '../dtos/IMailTemplateFragmentDTO';

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
