export class CreateIQueueDTO {
  public execute(): string {
    return `export type IQueueDTO<T> = Record<
  string,
  {
    queue: T;
    handle: ({ data }: { data: unknown }) => Promise<void>;
  }
>;
`;
  }
}
