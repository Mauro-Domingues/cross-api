export class CreateBaseRepository {
  public execute(): string {
    return `import { AppDataSource } from '@shared/typeorm/dataSource';
import {
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
  Repository,
} from 'typeorm';

import { IBaseRepositoryDTO } from './IBaseRepository';

interface IFindOptionsRelationsDTO<T> {
  [key: string]: boolean | IFindOptionsRelationsDTO<T>;
}

export class BaseRepository<Entity extends ObjectLiteral>
  implements IBaseRepositoryDTO<Entity>
{
  public ormRepository: Repository<Entity>;

  constructor(target: EntityTarget<Entity>) {
    this.ormRepository = AppDataSource.getRepository(target);
  }

  public arrayToObject(
    pathToRelations?: keysOfEntity<Entity>,
  ): FindOptionsRelations<Entity> | string[] {
    if (!pathToRelations) return [];
    const result: IFindOptionsRelationsDTO<Entity> = {};
    pathToRelations.forEach(path => {
      const parts = path.split('.');
      let current: IFindOptionsRelationsDTO<Entity> = result;
      for (let i = 0; i < parts.length; i + 1) {
        const part = parts[i];
        if (i === parts.length - 1) {
          current[part] = true;
        } else {
          current[part] = current[part] || {};
          current = current[part] as IFindOptionsRelationsDTO<Entity>;
        }
      }
    });

    return result as FindOptionsRelations<Entity>;
  }

  public async findBy(
    baseData: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
    relations?: keysOfEntity<Entity>,
  ): Promise<Entity | null> {
    const entity = await this.ormRepository.findOne({
      where: baseData,
      relations: this.arrayToObject(relations),
    });

    return entity;
  }

  public async findAll(
    page: number,
    limit: number,
    conditions?: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
    relations?: keysOfEntity<Entity>,
  ): Promise<{ list: Entity[]; amount: number }> {
    const [list, amount] = await this.ormRepository.findAndCount({
      where: conditions,
      take: limit,
      skip: (page - 1) * limit,
      relations: this.arrayToObject(relations),
    });

    return { list, amount };
  }

  public async findIn(
    propertyName: keyof Entity,
    baseData: Entity[keyof Entity][],
    relations?: keysOfEntity<Entity>,
  ): Promise<Entity[]> {
    const entities = await this.ormRepository.find({
      where: { [propertyName]: In(baseData) } as FindOptionsWhere<Entity>,
      relations: this.arrayToObject(relations),
    });

    return entities;
  }

  public async findLike(
    baseData: { [key in keyof Entity]: string },
    select?: FindOptionsSelect<Entity>,
    order?: FindOptionsOrder<Entity>,
    limit?: number,
  ): Promise<Entity[]> {
    const entities = await this.ormRepository.find({
      select,
      where: {
        [Object.keys(baseData)[0]]: Like(Object.values(baseData)[0]),
      } as FindOptionsWhere<Entity>,
      order,
      take: limit,
    });

    return entities;
  }

  public async create(baseData: DeepPartial<Entity>): Promise<Entity> {
    const entity = this.ormRepository.create(baseData);

    await this.ormRepository.save(entity);

    return entity;
  }

  public async update(baseData: Entity): Promise<Entity> {
    return this.ormRepository.save(baseData);
  }

  public async delete(
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    return this.ormRepository.delete(baseData);
  }

  public async softDelete(
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    return this.ormRepository.softDelete(baseData);
  }
}
`;
  }
}
