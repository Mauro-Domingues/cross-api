import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';

export class CreateEntity {
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<IModuleNameDTO, 'upperModuleName' | 'dbModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

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
