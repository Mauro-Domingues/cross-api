export class CreateBaseFakeRepository {
    execute() {
        return `import { Base } from '@shared/container/modules/entities/Base';
import {
  DeepPartial,
  DeleteResult,
  FindOptionsWhere,
  ObjectLiteral,
  QueryRunner,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { IBaseRepositoryDTO } from '../IBaseRepository';

export abstract class FakeBaseRepository<Entity extends ObjectLiteral & Base>
  implements IBaseRepositoryDTO<Entity>
{
  public fakeOrmRepository: Array<Entity> = [];

  public async findBy(
    _trx: QueryRunner,
    baseData: FindOptionsWhere<Entity> | Array<FindOptionsWhere<Entity>>,
  ): Promise<Entity | null> {
    let findEntity: Entity | undefined;
    if (baseData instanceof Array) {
      findEntity = this.fakeOrmRepository.find(entity =>
        baseData.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    } else {
      findEntity = this.fakeOrmRepository.find(entity =>
        Object.entries(baseData).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      );
    }

    if (!findEntity) {
      return null;
    }
    return findEntity;
  }

  public async findAll(
    _trx: QueryRunner,
    page: number,
    limit: number,
    conditions?: FindOptionsWhere<Entity> | Array<FindOptionsWhere<Entity>>,
  ): Promise<{ list: Array<Entity>; amount: number }> {
    let filtered: Array<Entity>;
    if (!conditions) {
      filtered = this.fakeOrmRepository;
    } else if (conditions instanceof Array) {
      filtered = this.fakeOrmRepository.filter(entity =>
        conditions.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    } else {
      filtered = this.fakeOrmRepository.filter(entity =>
        Object.entries(conditions).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      );
    }

    const filtredEntities = filtered.slice((page - 1) * limit, page * limit);

    return { list: filtredEntities, amount: filtered.length };
  }

  public async findIn(
    _trx: QueryRunner,
    propertyName: keyof Entity,
    baseData: Array<Entity[keyof Entity]>,
  ): Promise<Array<Entity>> {
    const entities = this.fakeOrmRepository.filter(entity =>
      baseData.includes(entity[propertyName]),
    );

    return entities;
  }

  public async findLike(
    _trx: QueryRunner,
    baseData: Partial<{ [key in keyof Entity]: string }>,
  ): Promise<Array<Entity>> {
    const entities = this.fakeOrmRepository.filter(entity =>
      entity[Object.keys(baseData)[0]]
        .toString()
        .includes(Object.values(baseData)[0]),
    );

    return entities;
  }

  public async create(
    _trx: QueryRunner,
    baseData: DeepPartial<Entity>,
  ): Promise<Entity> {
    const base = {
      ...baseData,
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    };

    this.fakeOrmRepository.push(base);

    return base;
  }

  public async update(_trx: QueryRunner, baseData: Entity): Promise<Entity> {
    const findEntity: number = this.fakeOrmRepository.findIndex(
      entity => entity.id === baseData.id,
    );

    this.fakeOrmRepository[findEntity] = baseData;
    this.fakeOrmRepository[findEntity].updated_at = new Date();

    return baseData;
  }

  public async delete(
    _trx: QueryRunner,
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    const deleteEntities: Array<Entity> = this.fakeOrmRepository.filter(entity =>
      Object.entries(baseData).every(
        ([key, value]) => entity[key] === value && !entity.deleted_at,
      ),
    );

    this.fakeOrmRepository = this.fakeOrmRepository.filter(
      entity => !deleteEntities.includes(entity),
    );

    return {
      raw: 'query to delete an Entity',
      affected: deleteEntities.length,
    };
  }

  public async softDelete(
    _trx: QueryRunner,
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    const deleteEntities: Array<Entity> = this.fakeOrmRepository.filter(entity =>
      Object.entries(baseData).every(
        ([key, value]) => entity[key] === value && !entity.deleted_at,
      ),
    );

    deleteEntities.forEach(entity => {
      entity.deleted_at = new Date();
    });

    return {
      raw: 'query to softDelete an Entity',
      affected: deleteEntities.length,
    };
  }
}
`;
    }
}
