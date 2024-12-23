import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateMigration } from '@templates/modules/migrations/migration';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateMigrations {
  private readonly createMigration: CreateMigration;
  protected readonly fileManager: FileManager;
  private readonly timestamp: number;
  private readonly concat: Concat;

  public constructor(
    protected readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'dbModuleName' | 'lowerModuleName'
    >,
  ) {
    this.timestamp = Date.now();
    this.createMigration = new CreateMigration(this.names, this.timestamp);
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'typeorm',
        'migrations',
        this.concat.execute(
          this.timestamp.toString(),
          '-',
          this.names.lowerModuleName,
          '.ts',
        ),
      ],
      this.createMigration,
    );
  }
}
