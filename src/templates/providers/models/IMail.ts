export class CreateIMail {
  public execute(): string {
    return `import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
`;
  }
}
