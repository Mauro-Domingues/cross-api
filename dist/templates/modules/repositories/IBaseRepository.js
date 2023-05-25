export class CreateIBaseRepository {
    execute() {
        return `import {
  DeepPartial,
  DeleteResult,
  FindOptionsOrder,
  FindOptionsSelect,
  FindOptionsWhere,
  ObjectLiteral,
  QueryRunner,
} from 'typeorm';

export interface IBaseRepositoryDTO<Entity extends ObjectLiteral> {
  findAll(
    trx: QueryRunner,
    page: number,
    limit: number,
    conditions?: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
    relations?: keysOfEntity<Entity> | string[],
  ): Promise<{ list: Entity[]; amount: number }>;
  findBy(
    trx: QueryRunner,
    entityData: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
    relations?: keysOfEntity<Entity> | string[],
  ): Promise<Entity | null>;
  findIn(
    trx: QueryRunner,
    propertyName: string,
    baseData: Entity[keyof Entity][],
    relations?: keysOfEntity<Entity> | string[],
  ): Promise<Entity[]>;
  findLike(
    trx: QueryRunner,
    baseData: { [key in keyof Entity]: string },
    select?: FindOptionsSelect<Entity>,
    order?: FindOptionsOrder<Entity>,
    limit?: number,
  ): Promise<Entity[]>;
  create(trx: QueryRunner, entityData: DeepPartial<Entity>): Promise<Entity>;
  update(trx: QueryRunner, entityData: Entity): Promise<Entity>;
  delete(
    trx: QueryRunner,
    entityData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult>;
  softDelete(
    trx: QueryRunner,
    entityData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult>;
}
`;
    }
}
