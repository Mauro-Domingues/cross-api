export class CreateBaseEntity {
  public execute(): string {
    return `import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} ${'from'} 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public declare readonly id: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  public declare readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  public declare readonly updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'datetime' })
  public declare readonly deletedAt: Date;
}
`;
  }
}
