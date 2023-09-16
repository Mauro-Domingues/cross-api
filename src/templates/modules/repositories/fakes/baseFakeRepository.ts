export class CreateBaseFakeRepository {
  public execute(): string {
    return `import { Base } ${'from'} '@shared/container/modules/entities/Base';
import { ObjectLiteral } ${'from'} 'typeorm';
import { v4 as uuid } ${'from'} 'uuid';
import { IBaseRepositoryDTO } ${'from'} '../IBaseRepository';

export abstract class FakeBaseRepository<Entity extends ObjectLiteral & Base>
  implements IBaseRepositoryDTO<Entity>
{
  protected fakeRepository: Array<Entity> = [];

  public async exists({
    where,
  }: {
    where: Partial<Entity> | Array<Partial<Entity>>;
  }): Promise<boolean> {
    if (where instanceof Array) {
      return this.fakeRepository.some(entity =>
        where.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    }
    return this.fakeRepository.some(entity =>
      Object.entries(where).every(
        ([key, value]) => entity[key] === value && !entity.deleted_at,
      ),
    );
  }

  public async findBy({
    where,
  }: {
    where: Partial<Entity> | Array<Partial<Entity>>;
  }): Promise<Entity | null> {
    let findEntity: Entity | undefined;

    if (where instanceof Array) {
      findEntity = this.fakeRepository.find(entity =>
        where.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    } else {
      findEntity = this.fakeRepository.find(entity =>
        Object.entries(where).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      );
    }

    if (!findEntity) {
      return null;
    }

    return findEntity;
  }

  public async findAll({
    page = 1,
    limit = 20,
    where,
  }: {
    page: number;
    limit: number;
    where: Partial<Entity> | Array<Partial<Entity>>;
  }): Promise<{ list: Array<Entity>; amount: number }> {
    let filtered: Array<Entity>;
    if (!where) {
      filtered = this.fakeRepository;
    } else if (where instanceof Array) {
      filtered = this.fakeRepository.filter(entity =>
        where.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    } else {
      filtered = this.fakeRepository.filter(entity =>
        Object.entries(where).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      );
    }

    const filtredEntities = filtered.slice((page - 1) * limit, page * limit);

    return { list: filtredEntities, amount: filtered.length };
  }

  public async findIn({
    where,
  }: {
    where: Partial<{ [key in keyof Entity]: Array<Entity[keyof Entity]> }>;
  }): Promise<Array<Entity>> {
    return this.fakeRepository.filter(entity =>
      Object.entries(where).every(([key, values]) =>
        (values as Array<Entity[keyof Entity]>).includes(
          entity[key as keyof Entity],
        ),
      ),
    );
  }

  public async findLike({
    where,
  }: {
    where: Partial<Entity> | Array<Partial<Entity>>;
  }): Promise<Array<Entity>> {
    return this.fakeRepository.filter(entity =>
      Object.entries(where).every(([key, value]) => {
        let strValue = value.toString();
        if (strValue.startsWith('%')) {
          strValue = strValue.substring(1);
        }
        if (strValue.endsWith('%')) {
          strValue = strValue.slice(0, -1);
        }
        return entity[key as keyof Entity].toString().includes(strValue);
      }),
    );
  }

  public async create(baseData: Partial<Entity>): Promise<Entity> {
    const base = {
      ...baseData,
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    } as unknown as Entity;

    this.fakeRepository.push(base);

    return base;
  }

  public async createMany(
    baseData: Array<Partial<Entity>>,
  ): Promise<Array<Entity>> {
    return (baseData as Array<Entity>).map(data => {
      const base = {
        ...data,
        id: uuid(),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      } as unknown as Entity;

      this.fakeRepository.push(base);

      return base;
    });
  }

  public async update(baseData: Partial<Entity>): Promise<Entity> {
    const findEntity: number = this.fakeRepository.findIndex(
      entity => entity.id === baseData.id,
    );

    this.fakeRepository[findEntity] = baseData as Entity;
    this.fakeRepository[findEntity].updated_at = new Date();

    return this.fakeRepository[findEntity];
  }

  public async updateMany(
    baseData: Array<Partial<Entity>>,
  ): Promise<Array<Entity>> {
    return (baseData as Array<Entity>).map(data => {
      const findEntity: number = this.fakeRepository.findIndex(
        entity => entity.id === data.id,
      );

      this.fakeRepository[findEntity] = data;
      this.fakeRepository[findEntity].updated_at = new Date();

      return this.fakeRepository[findEntity];
    });
  }

  public async delete(baseData: Partial<Entity>): Promise<{
    raw: string;
    affected: number;
  }> {
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

  public async deleteMany(baseData: Array<Partial<Entity>>): Promise<{
    raw: string;
    affected: number;
  }> {
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

  public async softDelete(baseData: Partial<Entity>): Promise<{
    raw: string;
    affected: number;
  }> {
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

  public async softDeleteMany(baseData: Array<Partial<Entity>>): Promise<{
    raw: string;
    affected: number;
  }> {
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
