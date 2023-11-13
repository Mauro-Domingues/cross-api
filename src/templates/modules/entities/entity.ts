import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateEntity {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<IModuleNamesDTO, 'upperModuleName' | 'dbModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.one({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { Entity, Column } ${'from'} 'typeorm';
import { Base } ${'from'} '@shared/container/modules/entities/Base';
import { Connection } ${'from'} '@shared/typeorm';

@Entity('${this.names.dbModuleName}', { database: Connection.client })
export class ${this.names.upperModuleName} extends Base {
  @Column({ type: 'varchar', unique: false })
  public name: string;

  @Column({ type: 'varchar', nullable: true })
  public description: string;
}
`;
  }
}
