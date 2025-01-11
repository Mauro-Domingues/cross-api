export class CreateFakeMailTemplate {
  public execute(): string {
    return `import { IParseMailTemplateDTO } ${'from'} '../dtos/IParseMailTemplateDTO';
import { IMailTemplateProvider } ${'from'} '../models/IMailTemplateProvider';

export class FakeMailTemplateProvider implements IMailTemplateProvider {
  public registerPartial(): void {
    return console.log('Partial registered');
  }

  public compile({ variables }: Omit<IParseMailTemplateDTO, 'name'>): string {
    return \`
        <html>
          <body>
            <h1>Welcome! This is a test email.</h1>
            \${Object.values(variables ?? {})
              .map(variable => \`<p>\${variable}</p>\`)
              .join('')}
            <p>Thank you for joining us. If you have any questions, let us know.</p>
            <p>Best regards,<br/>The Team</p>
          </body>
        </html>
      \`;
  }
}
`;
  }
}
