import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class CreateEntity {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
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
import { Base } from '@shared/modules/entities/Base';

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
