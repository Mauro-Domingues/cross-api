export class CreateIMail {
  public execute(): string {
    return `import { ISendMailDTO } fr\om '../dtos/ISendMailDTO';

export interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
`;
  }
}
