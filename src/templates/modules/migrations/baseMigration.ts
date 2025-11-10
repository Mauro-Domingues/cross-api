export class CreateBaseMigration {
  public execute(): string {
    return `import type { TableColumnOptions } fr\om 'typeorm';

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
        length: '6',
        default: 'CURRENT_TIMESTAMP(6)',
      },
      {
        name: 'updated_at',
        type: 'datetime',
        length: '6',
        default: 'CURRENT_TIMESTAMP(6)',
      },
      {
        name: 'deleted_at',
        type: 'datetime',
        length: '6',
        isNullable: true,
      },
    ];
  }
}
`;
  }
}
