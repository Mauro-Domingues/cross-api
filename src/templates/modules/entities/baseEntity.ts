export class CreateBaseEntity {
  public execute(): string {
    return `import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} ${'from'} 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @CreateDateColumn({ type: 'datetime' })
  public readonly created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  public readonly updated_at: Date;

  @DeleteDateColumn({ type: 'datetime' })
  public readonly deleted_at: Date;
}
`;
  }
}
