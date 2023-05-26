export class CreateIBaseRepository {
  public execute(): string {
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
    conditions?: FindOptionsWhere<Entity> | Array<FindOptionsWhere<Entity>>,
    relations?: keysOfEntity<Entity> | Array<string>,
  ): Promise<{ list: Array<Entity>; amount: number }>;
  findBy(
    trx: QueryRunner,
    entityData: FindOptionsWhere<Entity> | Array<FindOptionsWhere<Entity>>,
    relations?: keysOfEntity<Entity> | Array<string>,
  ): Promise<Entity | null>;
  findIn(
    trx: QueryRunner,
    propertyName: string,
    baseData: Array<Entity[keyof Entity]>,
    relations?: keysOfEntity<Entity> | Array<string>,
  ): Promise<Array<Entity>>;
  findLike(
    trx: QueryRunner,
    baseData: Partial<{ [key in keyof Entity]: string }>,
    select?: FindOptionsSelect<Entity>,
    order?: FindOptionsOrder<Entity>,
    limit?: number,
  ): Promise<Array<Entity>>;
  create(trx: QueryRunner, entityData: DeepPartial<Entity>): Promise<Entity>;
  createMany(
    trx: QueryRunner,
    entityData: Array<DeepPartial<Entity>>,
  ): Promise<Array<Entity>>;
  update(trx: QueryRunner, entityData: Entity): Promise<Entity>;
  updateMany(
    trx: QueryRunner,
    entityData: Array<Entity>,
  ): Promise<Array<Entity>>;
  delete(
    trx: QueryRunner,
    entityData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult>;
  deleteMany(
    trx: QueryRunner,
    entityData: Array<FindOptionsWhere<Entity>>,
  ): Promise<DeleteResult>;
  softDelete(
    trx: QueryRunner,
    entityData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult>;
  softDeleteMany(
    trx: QueryRunner,
    entityData: Array<FindOptionsWhere<Entity>>,
  ): Promise<DeleteResult>;
}
`;
  }
}
