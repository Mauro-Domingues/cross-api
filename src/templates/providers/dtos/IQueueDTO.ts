export class CreateIQueueDTO {
  public execute(): string {
    return `import type { IHandleDTO } fr\u006Fm './IHandleDTO';

export type IQueueDTO<T> = Record<
  Capitalize<string>,
  InstanceType<IHandleDTO> & {
    queue: T;
  }
>;
`;
  }
}
