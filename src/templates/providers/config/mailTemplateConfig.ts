export class CreateMailTemplateConfig {
  public execute(): string {
    return `interface IMailTemplateConfigDTO {
  driver: 'handlebars';
}

export const mailTemplateConfig: IMailTemplateConfigDTO = {
  driver: 'handlebars',
};
`;
  }
}
