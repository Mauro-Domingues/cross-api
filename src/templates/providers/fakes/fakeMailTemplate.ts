export class CreateFakeMailTemplate {
  public execute(): string {
    return `import type { IParseMailTemplateDTO } fr\om '../dtos/IParseMailTemplateDTO';
import type { IMailTemplateProvider } fr\om '../models/IMailTemplateProvider';

export class FakeMailTemplateProvider implements IMailTemplateProvider {
  public compile({ variables }: IParseMailTemplateDTO): string {
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
