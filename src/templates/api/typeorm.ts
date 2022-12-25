export default function createTypeorm(): string {
  return `import { Connection, createConnection } from 'typeorm';

import { AppDataSource } from '../../../dataSource';

export default async (): Promise<Connection> => {
  return createConnection(AppDataSource.options);
};

// Image examples

// import uploadConfig from "@config/upload";
// import { Expose } from "class-transformer";

// @Column({ type: 'varchar', nullable: true})
// image: string

// @Expose({ name: "avatar_url" })
// getAvatarUrl(): string | null {
//   if (!this.image) {
//     return null;
//   }
//   switch (uploadConfig.driver) {
//     case "disk":
//       return \`\${process.env.APP_API_URL}/files/\${this.image}\`;
//     case "s3":
//       return \`https://\${uploadConfig.config.aws.bucket}.s3.amazonaws.com/\${this.image}\`;
//     default:
//       return null;
//   }
// }

// Relations examples

// @OneToOne(() => thisEntity, relationEntity => relationEntity.thisEntity,
// {onDelete: 'OPTION', onUpdate: 'OPTION'})
// @JoinColumn()
// relationEntity: relationEntity;

// @OneToMany(() => thisEntity, relationEntity => relationEntity.thisEntity,
// {onDelete: 'OPTION', onUpdate: 'OPTION'})
// relationEntity: relationEntity[];

// @ManyToOne(() => thisEntity, relationEntity => relationEntity.thisEntity,
// {onDelete: 'OPTION', onUpdate: 'OPTION'})
// @JoinColumn({ name: "relationEntity_id" })
// relationEntity: relationEntity;

// @ManyToMany(() => thisEntity, relationEntity => relationEntity.thisEntity,
// {onDelete: 'OPTION', onUpdate: 'OPTION'})
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
// relationEntity: relationEntity[];
`;
}
