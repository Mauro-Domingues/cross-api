export class CreateIMessaging {
  public execute(): string {
    return `import type { IModel } fr\om 'cross-proxy';

export interface IMessagingProvider extends IModel {}
`;
  }
}
