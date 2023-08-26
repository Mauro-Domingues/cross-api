export class CreateBaseFakeRepository {
  public execute(): string {
    return `import { Base } ${'from'} '@shared/container/modules/entities/Base';
import {
  DeepPartial,
  DeleteResult,
  FindOptionsWhere,
  ObjectLiteral,
  QueryRunner,
} ${'from'} 'typeorm';
import { v4 as uuid } ${'from'} 'uuid';
import { IBaseRepositoryDTO } ${'from'} '../IBaseRepository';

export abstract class FakeBaseRepository<Entity extends ObjectLiteral & Base>
  implements IBaseRepositoryDTO<Entity>
{
  public fakeRepository: Array<Entity> = [];

  public async exists(
    _trx: QueryRunner,
    baseData: FindOptionsWhere<Entity> | Array<FindOptionsWhere<Entity>>,
  ): Promise<boolean> {
    if (baseData instanceof Array) {
      return this.fakeRepository.some(entity =>
        baseData.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    }
    return this.fakeRepository.some(entity =>
      Object.entries(baseData).every(
        ([key, value]) => entity[key] === value && !entity.deleted_at,
      ),
    );
  }

  public async findBy(
    _trx: QueryRunner,
    baseData: FindOptionsWhere<Entity> | Array<FindOptionsWhere<Entity>>,
  ): Promise<Entity | null> {
    let findEntity: Entity | undefined;
    if (baseData instanceof Array) {
      findEntity = this.fakeRepository.find(entity =>
        baseData.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    } else {
      findEntity = this.fakeRepository.find(entity =>
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
      filtered = this.fakeRepository;
    } else if (conditions instanceof Array) {
      filtered = this.fakeRepository.filter(entity =>
        conditions.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    } else {
      filtered = this.fakeRepository.filter(entity =>
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
    return this.fakeRepository.filter(entity =>
      baseData.includes(entity[propertyName]),
    );
  }

  public async findLike(
    _trx: QueryRunner,
    baseData: Partial<{ [key in keyof Entity]: string }>,
  ): Promise<Array<Entity>> {
    return this.fakeRepository.filter(entity =>
      entity[Object.keys(baseData)[0]]
        .toString()
        .includes(Object.values(baseData)[0]),
    );
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

    this.fakeRepository.push(base);

    return base;
  }

  public async createMany(
    _trx: QueryRunner,
    baseData: Array<DeepPartial<Entity>>,
  ): Promise<Array<Entity>> {
    return baseData.map(data => {
      const base = {
        ...data,
        id: uuid(),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      };

      this.fakeRepository.push(base);

      return base;
    });
  }

  public async update(_trx: QueryRunner, baseData: Entity): Promise<Entity> {
    const findEntity: number = this.fakeRepository.findIndex(
      entity => entity.id === baseData.id,
    );

    this.fakeRepository[findEntity] = baseData;
    this.fakeRepository[findEntity].updated_at = new Date();

    return baseData;
  }

  public async updateMany(
    _trx: QueryRunner,
    baseData: Array<Entity>,
  ): Promise<Array<Entity>> {
    return baseData.map(data => {
      const findEntity: number = this.fakeRepository.findIndex(
        entity => entity.id === data.id,
      );

      this.fakeRepository[findEntity] = data;
      this.fakeRepository[findEntity].updated_at = new Date();

      return data;
    });
  }

  public async delete(
    _trx: QueryRunner,
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    const deleteEntities: Array<Entity> = this.fakeRepository.filter(entity =>
      Object.entries(baseData).every(
        ([key, value]) => entity[key] === value && !entity.deleted_at,
      ),
    );

    this.fakeRepository = this.fakeRepository.filter(
      entity => !deleteEntities.includes(entity),
    );

    return {
      raw: 'query to delete an Entity',
      affected: deleteEntities.length,
    };
  }

  public async deleteMany(
    _trx: QueryRunner,
    baseData: Array<FindOptionsWhere<Entity>>,
  ): Promise<DeleteResult> {
    let deleteEntities: Array<Entity> = [];
    baseData.forEach(data => {
      const entitiesToDelete = this.fakeRepository.filter(entity =>
        Object.entries(data).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      );
      deleteEntities = [...deleteEntities, ...entitiesToDelete];
    });

    this.fakeRepository = this.fakeRepository.filter(
      entity => !deleteEntities.includes(entity),
    );

    return {
      raw: 'query to delete multiple Entities',
      affected: deleteEntities.length,
    };
  }

  public async softDelete(
    _trx: QueryRunner,
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    const deleteEntities: Array<Entity> = this.fakeRepository.filter(entity =>
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

  public async softDeleteMany(
    _trx: QueryRunner,
    baseData: Array<FindOptionsWhere<Entity>>,
  ): Promise<DeleteResult> {
    let deleteEntities: Array<Entity> = [];
    baseData.forEach(data => {
      const entitiesToDelete = this.fakeRepository.filter(entity =>
        Object.entries(data).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      );
      deleteEntities = [...deleteEntities, ...entitiesToDelete];
    });

    deleteEntities.forEach(entity => {
      entity.deleted_at = new Date();
    });

    return {
      raw: 'query to softDelete multiple Entities',
      affected: deleteEntities.length,
    };
  }
}
`;
  }
}
