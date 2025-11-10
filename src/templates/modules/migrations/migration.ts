import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateMigration {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'dbModuleName'
    >,
    private readonly timestamp: number,
  ) {}

  public execute(): string {
    return `import { BaseMigration } fr\om '@shared/container/modules/migrations/BaseMigration';
import { type MigrationInterface, type QueryRunner, Table } fr\om 'typeorm';

export class ${this.names.upperModuleName}${this.timestamp}
  extends BaseMigration
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: '${this.names.dbModuleName}',
        columns: [
          ...this.baseColumns,
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('${this.names.dbModuleName}', true);
  }
}
`;
  }
}
