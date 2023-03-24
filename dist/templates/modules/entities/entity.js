"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEntity = void 0;
const messages_1 = require("@tools/messages");
class CreateEntity {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
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
export default class ${this.names.upperModuleName} {
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
exports.CreateEntity = CreateEntity;
