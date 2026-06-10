export class CreateIHandleDTO {
  public execute(): string {
    return `export interface IHandleDTO<T = never> {
  new (...args: Array<T>): {
    handle({ data }: { data: unknown }): unknown;
  };
  readonly key: Capitalize<string>;
}
`;
  }
}
