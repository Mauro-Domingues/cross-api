export class CreateIQueueDTO {
  public execute(): string {
    return `import { IHandleDTO } ${'from'} './IHandleDTO';

export type IQueueDTO<T> = Record<
  Capitalize<string>,
  InstanceType<IHandleDTO> & {
    queue: T;
  }
>;
`;
  }
}
