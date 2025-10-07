export class CreateBaseEntity {
  public execute(): string {
    return `import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
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
