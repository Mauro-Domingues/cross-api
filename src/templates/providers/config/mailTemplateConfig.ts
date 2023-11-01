export class CreateMailTemplateConfig {
  public execute(): string {
    return `interface IMailTemplateConfigDTO {
  driver: 'handlebars';
}

export const mailConfig: IMailTemplateConfigDTO = {
  driver: 'handlebars',
};
`;
  }
}
