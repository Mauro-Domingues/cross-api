export class CreateMailTemplateConfig {
  public execute(): string {
    return `import { Joi } ${'from'} 'celebrate';

interface IMailTemplateConfigDTO {
  readonly driver: 'handlebars';
}

const mailTemplateValidator = Joi.object<IMailTemplateConfigDTO>({
  driver: Joi.string().valid('handlebars').required(),
});

export const mailTemplateConfig = Object.freeze<IMailTemplateConfigDTO>({
  driver: 'handlebars',
});

mailTemplateValidator.validateAsync(mailTemplateConfig);
`;
  }
}
