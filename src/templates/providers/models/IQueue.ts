export class CreateIQueue {
  public execute(): string {
    return `import type { IIntervalDTO } fr\om '@dtos/IIntervalDTO';
import type { IHandleDataDTO } fr\om '../dtos/IHandleDataDTO';
import type { IHandleDTO } fr\om '../dtos/IHandleDTO';

export interface IQueueProvider {
  execute<T extends IHandleDTO>(data: {
    job: T;
    data: IHandleDataDTO<T>;
    attempts?: number;
  }): Promise<unknown>;
  schedule<T extends IHandleDTO>(data: {
    job: T;
    data: IHandleDataDTO<T>;
    delay: IIntervalDTO;
    attempts?: number;
  }): Promise<unknown>;
}
`;
  }
}
