export class CreateIHandleDTO {
  public execute(): string {
    return `export interface IHandleDTO {
  new (): {
    handle({ data }: { data: unknown }): unknown;
  };
  readonly key: Capitalize<string>;
}
`;
  }
}
