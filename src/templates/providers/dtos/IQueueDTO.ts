export class CreateIQueueDTO {
  public execute(): string {
    return `export interface IQueueDTO<T> {
  [key: string]: {
    queue: T;
    handle: ({ data }: { data: unknown }) => Promise<void>;
  };
}
`;
  }
}
