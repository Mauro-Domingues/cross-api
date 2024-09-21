import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateEntity {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'dbModuleName'
    >,
  ) {}

  public execute(): string {
    return `import { Entity, Column } ${'from'} 'typeorm';
import { Base } ${'from'} '@shared/container/modules/entities/Base';

@Entity('${this.names.dbModuleName}')
export class ${this.names.upperModuleName} extends Base {
  @Column({ type: 'varchar', unique: false })
  public name: string;

  @Column({ type: 'varchar', nullable: true })
  public description: string;
}
`;
  }
}
