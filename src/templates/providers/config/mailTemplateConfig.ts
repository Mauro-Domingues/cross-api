export class CreateMailTemplateConfig {
  public execute(): string {
    return `interface IMailTemplateConfigDTO {
  readonly driver: 'handlebars';
}

export const mailTemplateConfig = Object.freeze<IMailTemplateConfigDTO>({
  driver: 'handlebars',
});
`;
  }
}
