export class CreateFakeMail {
  public execute(): string {
    return `import { ISendMailDTO } from '../dtos/ISendMailDTO';
import { IMailProviderDTO } from '../models/IMailProvider';

export class FakeMailProvider implements IMailProviderDTO {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
`;
  }
}
