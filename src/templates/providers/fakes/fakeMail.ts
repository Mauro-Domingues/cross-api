export class CreateFakeMail {
  public execute(): string {
    return `import {
  Transporter,
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} ${'from'} 'nodemailer';
import { mailConfig } ${'from'} '@config/mail';
import { ISendMailDTO } ${'from'} '../dtos/ISendMailDTO';
import { IMailProvider } ${'from'} '../models/IMailProvider';

export class FakeMailProvider implements IMailProvider {
  private client: Transporter;

  private async createClient(): Promise<void> {
    const account = await createTestAccount();

    this.client = createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
  }

  private get content(): string {
    return \`
      <html>
        <body>
          <h1>Welcome! This is a test email</h1>
          <p>Thank you for joining us. If you have any questions, let us know.</p>
          <p>Best regards,<br/>The Team</p>
        </body>
      </html>
    \`;
  }

  public async sendMail({ to, from, subject }: ISendMailDTO): Promise<void> {
    await this.createClient();

    const { email, name } = mailConfig.config.defaults.from;

    const message = await this.client.sendMail({
      from: {
        name: from?.name ?? name,
        address: from?.email ?? email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: this.content,
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', getTestMessageUrl(message));
  }
}
`;
  }
}
