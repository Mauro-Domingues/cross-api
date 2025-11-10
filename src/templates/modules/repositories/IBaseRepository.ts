export class CreateIBaseRepository {
  public execute(): string {
    return `import type {
  DeepPartial,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
  QueryRunner,
} fr\om 'typeorm';

export interface IBaseRepository<Entity extends ObjectLiteral> {
  exists(
    baseData: FindManyOptions<Entity>,
    trx?: QueryRunner,
  ): Promise<boolean>;
  findAll(
    baseData: FindManyOptions<Entity> &
      Partial<{ page: number; limit: number }>,
    trx?: QueryRunner,
  ): Promise<{ list: Array<Entity>; amount: number }>;
  findBy(
    entityData: FindOneOptions<Entity>,
    trx?: QueryRunner,
  ): Promise<Entity | null>;
  findIn(
    baseData: Omit<FindManyOptions<Entity>, 'where'> & {
      where: Partial<{ [key in keyof Entity]: Array<Entity[keyof Entity]> }>;
    } & Partial<{ page: number; limit: number }>,
    trx?: QueryRunner,
  ): Promise<Array<Entity>>;
  findLike(
    baseData: Omit<FindManyOptions<Entity>, 'where'> & {
      where: NonNullable<FindManyOptions<Entity>['where']>;
    } & Partial<{ page: number; limit: number }>,
    trx?: QueryRunner,
  ): Promise<Array<Entity>>;
  create(entityData: DeepPartial<Entity>, trx?: QueryRunner): Promise<Entity>;
  createMany(
    entityData: Array<DeepPartial<Entity>>,
    trx?: QueryRunner,
  ): Promise<Array<Entity>>;
  update(entityData: DeepPartial<Entity>, trx?: QueryRunner): Promise<Entity>;
  updateMany(
    entityData: Array<DeepPartial<Entity>>,
    trx?: QueryRunner,
  ): Promise<Array<Entity>>;
  delete(
    entityData: FindOptionsWhere<Entity>,
    trx?: QueryRunner,
  ): Promise<DeleteResult>;
  deleteMany(
    entityData: Array<FindOptionsWhere<Entity>>,
    trx?: QueryRunner,
  ): Promise<DeleteResult>;
  softDelete(
    entityData: FindOptionsWhere<Entity>,
    trx?: QueryRunner,
  ): Promise<DeleteResult>;
  softDeleteMany(
    entityData: Array<FindOptionsWhere<Entity>>,
    trx?: QueryRunner,
  ): Promise<DeleteResult>;
}
`;
  }
}
