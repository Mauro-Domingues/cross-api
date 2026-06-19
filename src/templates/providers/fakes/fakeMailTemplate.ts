export class CreateFakeMailTemplate {
  public execute(): string {
    return `import type { IParseMailTemplateDTO } fr\u006Fm '../dtos/IParseMailTemplateDTO';
import type { IMailTemplateProvider } fr\u006Fm '../models/IMailTemplateProvider';

export class FakeMailTemplateProvider implements IMailTemplateProvider {
  private getParts(
    variables: Record<string, unknown>,
  ): [
    greeting: string,
    body: string,
    closing: string,
    signOff: string,
    signature: string,
  ] {
    return [
      'Welcome! This is a test email.',
      Object.values(variables)
        .map(variable => variable)
        .join('\\n'),
      'Thank you for joining us. If you have any questions, let us know.',
      'Best regards,',
      'Support Team',
    ];
  }

  private parseHtml(variables: Record<string, unknown>): string {
    const [greeting, body, closing, signOff, signature] =
      this.getParts(variables);

    return \`
        <html>
          <body>
            <h1>\${greeting}</h1>
            \${body
              .split('\\n')
              .map(part => \`<p>\${part}</p>\`)
              .join('')}
            <p>\${closing}</p>
            <p>\${signOff}<br/>\${signature}</p>
          </body>
        </html>
      \`;
  }

  private parsePlain(variables: Record<string, unknown>): string {
    return this.getParts(variables).join('\\n');
  }

  public compile({ variables = {}, file }: IParseMailTemplateDTO): string {
    if (file === 'html') {
      return this.parseHtml(variables);
    }

    return this.parsePlain(variables);
  }
}
`;
  }
}
