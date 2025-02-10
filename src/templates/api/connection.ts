export class CreateConnection {
  public execute(): string {
    return `import { DataSource } ${'from'} 'typeorm';

export interface IConnection {
  readonly client: string;
  readonly mysql: DataSource;
}

export class Connection implements IConnection {
  public constructor(
    public readonly client: string,
    public readonly mysql: DataSource,
  ) {}
}
`;
  }
}
