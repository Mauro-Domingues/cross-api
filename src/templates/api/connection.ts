export class CreateConnection {
  public execute(): string {
    return `import { DataSource } ${'from'} 'typeorm';

export interface IConnection {
  readonly client: string;
  readonly mysql: DataSource;
}

export class Connection implements IConnection {
  public constructor(
    public readonly client: string,
    public readonly mysql: DataSource,
  ) {}
}

// Set entities from each database

// @Entity('name') // both databases
// @Entity('name', { database: process.env.MYSQL_DATABASE }) // only default database

// Image examples

// import { storageConfig } ${'from'} '@config/storage';
// import { Exclude, Expose } ${'from'} 'class-transformer';
//
// @Exclude()
// @Column({ type: 'varchar', nullable: true })
// public image: string
//
// @Expose({ name: "avatar_url" })
// public getAvatarUrl(): string | null {
//   if (!this.image) {
//     return null;
//   }
//   switch (storageConfig.driver) {
//     case "disk":
//       return \`\${process.env.API_URL}/uploads/\${this.image}\`;
//     case "s3":
//       return \`https://\${storageConfig.config.aws.bucket}.s3.amazonaws.com/\${this.image}\`;
//     default:
//       return null;
//   }
// }

// Relations examples

// @OneToOne(() => EntityClass, entityParam => entityParam.entityColumn,
// { onDelete: 'OPTION', onUpdate: 'OPTION' })
// @JoinColumn({ name: 'relationEntity_id' })
// public relationEntity: EntityClass;

// @OneToMany(() => EntityClass, entityParam => entityParam.entityColumn,
// { onDelete: 'OPTION', onUpdate: 'OPTION' })
// public relationEntity: Array<EntityClass>;

// @ManyToOne(() => EntityClass, entityParam => entityParam.entityColumn,
// { onDelete: 'OPTION', onUpdate: 'OPTION' })
// @JoinColumn({ name: "relationEntity_id" })
// public relationEntity: EntityClass;

// @ManyToMany(() => EntityClass, entityParam => entityParam.entityColumn,
// { onDelete: 'OPTION', onUpdate: 'OPTION' })
// @JoinTable({
//   name: 'thisEntity_relationEntity',
//   joinColumn: {
//       name: 'thisEntity_id',
//       referencedColumnName: 'id',
//   },
//   inverseJoinColumn: {
//       name: 'relationEntity_id',
//       referencedColumnName: 'id',
//   },
// })
// public relationEntity: Array<EntityClass>;
`;
  }
}
