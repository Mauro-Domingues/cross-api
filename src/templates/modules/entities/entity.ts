import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateEntity {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'dbModuleName'
    >,
  ) {}

  public execute(): string {
    return `import { Column, Entity } fr\om 'typeorm';
import { Base } fr\om '@shared/container/modules/entities/Base';

@Entity('${this.names.dbModuleName}')
export class ${this.names.upperModuleName} extends Base {
  @Column({ name: 'name', type: 'varchar', nullable: false })
  declare public name: string;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  declare public description: string;
}
`;
  }
}
