import { Messages } from '../../../tools/messages.js';
import { Console } from '../../../tools/console.js';
export class CreateEntity {
    messages;
    console;
    names;
    constructor(names) {
        this.console = new Console();
        this.messages = new Messages().execute();
        this.names = names;
    }
    execute() {
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
