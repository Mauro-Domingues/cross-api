"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypeorm;
function createTypeorm() {
  return `import { DataSource } from 'typeorm';

import { AppDataSource } from './dataSource';

export default async (): Promise<DataSource> => {
  return AppDataSource.initialize();
};

// Image examples

// import uploadConfig from "@config/upload";
// import { Expose } from "class-transformer";

// @Column({ type: 'varchar', nullable: true })
// image: string

// import { Expose } from 'class-transformer'
// @Expose({ name: "avatar_url" })
// getAvatarUrl(): string | null {
//   if (!this.image) {
//     return null;
//   }
//   switch (uploadConfig.driver) {
//     case "disk":
//       return \`\${process.env.API_URL}/files/\${this.image}\`;
//     case "s3":
//       return \`https://\${uploadConfig.config.aws.bucket}.s3.amazonaws.com/\${this.image}\`;
//     default:
//       return null;
//   }
// }

// Relations examples

// @OneToOne(() => relationEntity, relationEntityParam => relationEntityParam.thisEntityColumn,
// { onDelete: 'OPTION', onUpdate: 'OPTION' })
// @JoinColumn()
// relationEntity: relationEntity;

// @OneToMany(() => relationEntity, relationEntityParam => relationEntityParam.thisEntityColumn,
// { onDelete: 'OPTION', onUpdate: 'OPTION' })
// relationEntity: relationEntity[];

// @ManyToOne(() => relationEntity, relationEntityParam => relationEntityParam.thisEntityColumn,
// { onDelete: 'OPTION', onUpdate: 'OPTION' })
// @JoinColumn({ name: "relationEntity_id" })
// relationEntity: relationEntity;

// @ManyToMany(() => relationEntity, relationEntityParam => relationEntityParam.thisEntityColumn,
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
// relationEntity: relationEntity[];
`;
}