export class CreateFakeMail {
  public execute(): string {
    return `import { ISendMailDTO } ${'from'} '../dtos/ISendMailDTO';
import { IMailProvider } ${'from'} '../models/IMailProvider';

export class FakeMailProvider implements IMailProvider {
  private readonly messages: Array<ISendMailDTO> = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
`;
  }
}
