export class CreateBaseMigration {
  public execute(): string {
    return `import { TableColumnOptions } ${'from'} 'typeorm';

export abstract class BaseMigration {
  public get baseColumns(): Array<TableColumnOptions> {
    return [
      {
        name: 'id',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'uuid',
      },
      {
        name: 'created_at',
        type: 'datetime',
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'datetime',
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'deleted_at',
        type: 'datetime',
        isNullable: true,
      },
    ];
  }
}
`;
  }
}
