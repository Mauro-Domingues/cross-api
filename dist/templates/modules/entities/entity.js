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
        return `import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('${this.names.dbModuleName}')
export class ${this.names.upperModuleName} {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'datetime' })
  deleted_at: Date;
}
`;
    }
}
