export class CreateBaseEntity {
  public execute(): string {
    return `import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} fr\om 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  declare public readonly id: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  declare public readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  declare public readonly updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'datetime' })
  declare public readonly deletedAt: Date;
}
`;
  }
}
