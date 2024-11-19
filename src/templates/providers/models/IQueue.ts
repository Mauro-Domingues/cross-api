export class CreateIQueue {
  public execute(): string {
    return `import { IIntervalDTO } ${'from'} '@dtos/IIntervalDTO';

export interface IQueueProvider {
  execute<T extends object>(
    key: Capitalize<string>,
    data: T,
    attempts?: number,
  ): Promise<unknown>;
  schedule<T extends object>(
    key: Capitalize<string>,
    data: T,
    delay: IIntervalDTO,
    attempts?: number,
  ): Promise<unknown>;
}
`;
  }
}
