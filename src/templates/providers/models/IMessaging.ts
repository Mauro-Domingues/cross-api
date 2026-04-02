export class CreateIMessaging {
  public execute(): string {
    return `import type { IModel } fr\u006Fm 'cross-proxy';

export interface IMessagingProvider extends IModel {}
`;
  }
}
