export class CreateIQueue {
  public execute(): string {
    return `import { IIntervalDTO } ${'from'} '@dtos/IIntervalDTO';
import { IHandleDTO } ${'from'} '../dtos/IHandleDTO';
import { IHandleDataDTO } ${'from'} '../dtos/IHandleDataDTO';

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
