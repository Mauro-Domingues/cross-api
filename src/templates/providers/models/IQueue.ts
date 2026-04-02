export class CreateIQueue {
  public execute(): string {
    return `import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import type { IHandleDataDTO } fr\u006Fm '../dtos/IHandleDataDTO';
import type { IHandleDTO } fr\u006Fm '../dtos/IHandleDTO';

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
