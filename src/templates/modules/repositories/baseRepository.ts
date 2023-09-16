export class CreateBaseRepository {
  public execute(): string {
    return `import {
  DeepPartial,
  DeleteResult,
  EntityTarget,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  In,
  Like,
  ObjectLiteral,
  QueryRunner,
} ${'from'} 'typeorm';

import { IBaseRepositoryDTO } from './IBaseRepository';

export abstract class BaseRepository<Entity extends ObjectLiteral>
  implements IBaseRepositoryDTO<Entity>
{
  constructor(private readonly target: EntityTarget<Entity>) {}

  public async exists(
    baseData: FindManyOptions<Entity>,
    trx: QueryRunner,
  ): Promise<boolean> {
    return trx.manager.exists(this.target, baseData);
  }

  public async findBy(
    baseData: FindOneOptions<Entity>,
    trx: QueryRunner,
  ): Promise<Entity | null> {
    return trx.manager.findOne(this.target, baseData);
  }

  public async findAll(
    {
      page,
      limit,
      ...baseData
    }: FindManyOptions<Entity> & Partial<{ page: number; limit: number }>,
    trx: QueryRunner,
  ): Promise<{ list: Array<Entity>; amount: number }> {
    return trx.manager
      .findAndCount(this.target, {
        skip: page && limit && (page - 1) * limit,
        take: limit,
        ...baseData,
      })
      .then(([list, amount]) => ({ list, amount }));
  }

  public async findIn(
    {
      where,
      ...baseData
    }: Omit<FindManyOptions<Entity>, 'where'> & {
      where: Partial<{ [key in keyof Entity]: Array<Entity[keyof Entity]> }>;
    },
    trx: QueryRunner,
  ): Promise<Array<Entity>> {
    return trx.manager.find(this.target, {
      where: Object.fromEntries(
        Object.entries(where).map(([key, values]) => [
          key,
          In(values as Array<Entity[keyof Entity]>),
        ]),
      ) as FindManyOptions<Entity>['where'],
      ...baseData,
    });
  }

  public async findLike(
    {
      where,
      ...baseData
    }: Omit<FindManyOptions<Entity>, 'where'> & {
      where: NonNullable<FindManyOptions<Entity>['where']>;
    },
    trx: QueryRunner,
  ): Promise<Array<Entity>> {
    return trx.manager.find(this.target, {
      where: Object.fromEntries(
        Object.entries(where).map(([key, values]) => [key, Like(values)]),
      ) as FindManyOptions<Entity>['where'],
      ...baseData,
    });
  }

  public async create(
    baseData: DeepPartial<Entity>,
    trx: QueryRunner,
  ): Promise<Entity> {
    return trx.manager.save(
      this.target,
      trx.manager.create(this.target, baseData),
    );
  }

  public async createMany(
    baseData: Array<DeepPartial<Entity>>,
    trx: QueryRunner,
  ): Promise<Array<Entity>> {
    return trx.manager.save(
      this.target,
      trx.manager.create(this.target, baseData),
    );
  }

  public async update(
    baseData: DeepPartial<Entity>,
    trx: QueryRunner,
  ): Promise<Entity> {
    return trx.manager.save(this.target, baseData);
  }

  public async updateMany(
    baseData: Array<DeepPartial<Entity>>,
    trx: QueryRunner,
  ): Promise<Array<Entity>> {
    return trx.manager.save(this.target, baseData);
  }

  public async delete(
    baseData: FindOptionsWhere<Entity>,
    trx: QueryRunner,
  ): Promise<DeleteResult> {
    return trx.manager.delete(this.target, baseData);
  }

  public async deleteMany(
    baseData: Array<FindOptionsWhere<Entity>>,
    trx: QueryRunner,
  ): Promise<DeleteResult> {
    return trx.manager.delete(this.target, baseData);
  }

  public async softDelete(
    baseData: FindOptionsWhere<Entity>,
    trx: QueryRunner,
  ): Promise<DeleteResult> {
    return trx.manager.softDelete(this.target, baseData);
  }

  public async softDeleteMany(
    baseData: Array<FindOptionsWhere<Entity>>,
    trx: QueryRunner,
  ): Promise<DeleteResult> {
    return trx.manager.softDelete(this.target, baseData);
  }
}
`;
  }
}
