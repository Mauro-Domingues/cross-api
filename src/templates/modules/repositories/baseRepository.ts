export class CreateBaseRepository {
  public execute(): string {
    return `import {
  DeepPartial,
  DeleteResult,
  EntityTarget,
  FindOptionsOrder,
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
  In,
  Like,
  ObjectLiteral,
  QueryRunner,
} from 'typeorm';

import { IBaseRepositoryDTO } from './IBaseRepository';

interface IFindOptionsRelationsDTO<T> {
  [key: string]: boolean | IFindOptionsRelationsDTO<T> | undefined;
  persist?: boolean;
}

export abstract class BaseRepository<Entity extends ObjectLiteral>
  implements IBaseRepositoryDTO<Entity>
{
  public target: EntityTarget<Entity>;

  constructor(target: EntityTarget<Entity>) {
    this.target = target;
  }

  public arrayToObject(
    pathToRelations?: keysOfEntity<Entity> | Array<string>,
  ): FindOptionsRelations<Entity> {
    if (!pathToRelations) return {};
    const result: IFindOptionsRelationsDTO<Entity> = {};
    pathToRelations.forEach(path => {
      const parts = path.split('.');
      let current: IFindOptionsRelationsDTO<Entity> = result;
      for (let i = 0; i < parts.length; i += 1) {
        const part = parts[i];
        if (i === parts.length - 1) {
          if (typeof current[part] === 'object') {
            (current[part] as IFindOptionsRelationsDTO<Entity>).persist = true;
          } else {
            current[part] = true;
          }
        } else {
          if (current[part] === true) {
            current[part] = { persist: true };
          } else {
            current[part] = current[part] ?? {};
          }
          current = current[part] as IFindOptionsRelationsDTO<Entity>;
        }
      }
    });

    this.removeValueProperty(result);

    return result as FindOptionsRelations<Entity>;
  }

  private removeValueProperty(options: IFindOptionsRelationsDTO<Entity>) {
    if (options.persist) {
      delete options.persist;
    }
    Object.values(options).forEach(value => {
      if (typeof value === 'object' && value !== null) {
        this.removeValueProperty(value);
      }
    });
  }

  public async findBy(
    trx: QueryRunner,
    baseData: FindOptionsWhere<Entity> | Array<FindOptionsWhere<Entity>>,
    relations?: keysOfEntity<Entity> | Array<string>,
  ): Promise<Entity | null> {
    const entity = await trx.manager.findOne(this.target, {
      where: baseData,
      relations: this.arrayToObject(relations),
    });

    return entity;
  }

  public async findAll(
    trx: QueryRunner,
    page: number,
    limit: number,
    conditions?: FindOptionsWhere<Entity> | Array<FindOptionsWhere<Entity>>,
    relations?: keysOfEntity<Entity> | Array<string>,
    order?: FindOptionsOrder<Entity>,
    select?: FindOptionsSelect<Entity>,
  ): Promise<{ list: Array<Entity>; amount: number }> {
    const [list, amount] = await trx.manager.findAndCount(this.target, {
      relations: this.arrayToObject(relations),
      skip: (page - 1) * limit,
      where: conditions,
      take: limit,
      select,
      order,
    });

    return { list, amount };
  }

  public async findIn(
    trx: QueryRunner,
    propertyName: keyof Entity,
    baseData: Array<Entity[keyof Entity]>,
    relations?: keysOfEntity<Entity> | Array<string>,
    order?: FindOptionsOrder<Entity>,
    select?: FindOptionsSelect<Entity>,
  ): Promise<Array<Entity>> {
    const entities = await trx.manager.find(this.target, {
      where: { [propertyName]: In(baseData) } as FindOptionsWhere<Entity>,
      relations: this.arrayToObject(relations),
      select,
      order,
    });

    return entities;
  }

  public async findLike(
    trx: QueryRunner,
    baseData: Partial<{ [key in keyof Entity]: string }>,
    order?: FindOptionsOrder<Entity>,
    select?: FindOptionsSelect<Entity>,
    limit?: number,
  ): Promise<Array<Entity>> {
    const entities = await trx.manager.find(this.target, {
      where: {
        [Object.keys(baseData)[0]]: Like(Object.values(baseData)[0]),
      } as FindOptionsWhere<Entity>,
      take: limit,
      select,
      order,
    });

    return entities;
  }

  public async create(
    trx: QueryRunner,
    baseData: DeepPartial<Entity>,
  ): Promise<Entity> {
    const entity = trx.manager.create(this.target, baseData);

    await trx.manager.save(this.target, entity);

    return entity;
  }

  public async createMany(
    trx: QueryRunner,
    baseData: Array<DeepPartial<Entity>>,
  ): Promise<Array<Entity>> {
    const entities = trx.manager.create(this.target, baseData);

    await trx.manager.save(this.target, entities);

    return entities;
  }

  public async update(trx: QueryRunner, baseData: Entity): Promise<Entity> {
    return trx.manager.save(this.target, baseData);
  }

  public async updateMany(
    trx: QueryRunner,
    baseData: Array<Entity>,
  ): Promise<Array<Entity>> {
    return trx.manager.save(this.target, baseData);
  }

  public async delete(
    trx: QueryRunner,
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    return trx.manager.delete(this.target, baseData);
  }

  public async deleteMany(
    trx: QueryRunner,
    baseData: Array<FindOptionsWhere<Entity>>,
  ): Promise<DeleteResult> {
    return trx.manager.delete(this.target, baseData);
  }

  public async softDelete(
    trx: QueryRunner,
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    return trx.manager.softDelete(this.target, baseData);
  }

  public async softDeleteMany(
    trx: QueryRunner,
    baseData: Array<FindOptionsWhere<Entity>>,
  ): Promise<DeleteResult> {
    return trx.manager.softDelete(this.target, baseData);
  }
}
`;
  }
}
