import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateEntity {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly names:
    | Pick<IModuleNamesDTO, 'upperModuleName' | 'dbModuleName'>
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.console = new Console();
    this.messages = new Messages().execute();
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { Entity, Column } from 'typeorm';
import { Base } from '@shared/container/modules/entities/Base';

@Entity('${this.names.dbModuleName}')
export class ${this.names.upperModuleName} extends Base {
  @Column({ type: 'varchar', unique: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;
}
`;
  }
}
