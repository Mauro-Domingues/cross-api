export class CreateBaseRepository {
  public execute(): string {
    return `import {
  DeleteResult,
  EntityTarget,
  FindManyOptions,
  In,
  Like,
  ObjectLiteral,
  QueryRunner,
} ${'from'} 'typeorm';

import { IBaseRepositoryDTO } ${'from'} './IBaseRepository.js';

export abstract class BaseRepository<Entity extends ObjectLiteral>
  implements IBaseRepositoryDTO<Entity>
{
  public constructor(private readonly target: EntityTarget<Entity>) {}

  public async exists(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['exists']>[0],
    trx: QueryRunner,
  ): Promise<boolean> {
    return trx.manager.exists(this.target, baseData);
  }

  public async findBy(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['findBy']>[0],
    trx: QueryRunner,
  ): Promise<Entity | null> {
    return trx.manager.findOne(this.target, baseData);
  }

  public async findAll(
    {
      page,
      limit,
      ...baseData
    }: Parameters<IBaseRepositoryDTO<Entity>['findAll']>[0],
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
      page,
      limit,
      ...baseData
    }: Parameters<IBaseRepositoryDTO<Entity>['findIn']>[0],
    trx: QueryRunner,
  ): Promise<Array<Entity>> {
    return trx.manager.find(this.target, {
      skip: page && limit && (page - 1) * limit,
      take: limit,
      ...baseData,
      where: Object.fromEntries(
        Object.entries(where).map(([key, values]) => [
          key,
          In(values as Array<Entity[keyof Entity]>),
        ]),
      ) as FindManyOptions<Entity>['where'],
    });
  }

  public async findLike(
    {
      where,
      page,
      limit,
      ...baseData
    }: Parameters<IBaseRepositoryDTO<Entity>['findLike']>[0],
    trx: QueryRunner,
  ): Promise<Array<Entity>> {
    return trx.manager.find(this.target, {
      skip: page && limit && (page - 1) * limit,
      take: limit,
      ...baseData,
      where: (() => {
        if (Array.isArray(where)) {
          return where.flatMap(condition =>
            Object.entries(condition).map(([key, value]) => ({
              [key]: Like(value),
            })),
          );
        }
        return Object.entries(where).map(([key, value]) => ({
          [key]: Like(value),
        }));
      })() as FindManyOptions<Entity>['where'],
    });
  }

  public async create(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['create']>[0],
    trx: QueryRunner,
  ): Promise<Entity> {
    return trx.manager.save(
      this.target,
      trx.manager.create(this.target, baseData),
    );
  }

  public async createMany(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['createMany']>[0],
    trx: QueryRunner,
  ): Promise<Array<Entity>> {
    return trx.manager.save(
      this.target,
      trx.manager.create(this.target, baseData),
    );
  }

  public async update(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['create']>[0],
    trx: QueryRunner,
  ): Promise<Entity> {
    return trx.manager.save(this.target, baseData);
  }

  public async updateMany(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['updateMany']>[0],
    trx: QueryRunner,
  ): Promise<Array<Entity>> {
    return trx.manager.save(this.target, baseData);
  }

  public async delete(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['delete']>[0],
    trx: QueryRunner,
  ): Promise<DeleteResult> {
    return trx.manager.delete(this.target, baseData);
  }

  public async deleteMany(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['deleteMany']>[0],
    trx: QueryRunner,
  ): Promise<DeleteResult> {
    return trx.manager.delete(this.target, baseData);
  }

  public async softDelete(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['softDelete']>[0],
    trx: QueryRunner,
  ): Promise<DeleteResult> {
    return trx.manager.softDelete(this.target, baseData);
  }

  public async softDeleteMany(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['softDeleteMany']>[0],
    trx: QueryRunner,
  ): Promise<DeleteResult> {
    return trx.manager.softDelete(this.target, baseData);
  }
}
`;
  }
}
