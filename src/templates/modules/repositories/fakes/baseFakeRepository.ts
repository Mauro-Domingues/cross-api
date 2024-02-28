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
  }: Parameters<IBaseRepositoryDTO<Entity>['exists']>[0]): Promise<boolean> {
    return this.fakeRepository.some(entity =>
      (Array.isArray(where) ? where : [where]).some(property =>
        Object.entries(property as Entity).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      ),
    );
  }

  public async findBy({
    where,
  }: Parameters<
    IBaseRepositoryDTO<Entity>['findBy']
  >[0]): Promise<Entity | null> {
    const findEntity: Entity | undefined = this.fakeRepository.find(entity =>
      (Array.isArray(where) ? where : [where]).some(property =>
        Object.entries(property as Entity).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      ),
    );

    return findEntity ?? null;
  }

  public async findAll({
    page,
    limit,
    where,
  }: Parameters<IBaseRepositoryDTO<Entity>['findAll']>[0]): Promise<{
    list: Array<Entity>;
    amount: number;
  }> {
    const filtered: Array<Entity> = where
      ? this.fakeRepository.filter(entity =>
          (Array.isArray(where) ? where : [where]).some(property =>
            Object.entries(property as Entity).every(
              ([key, value]) => entity[key] === value && !entity.deleted_at,
            ),
          ),
        )
      : this.fakeRepository;

    const filtredEntities = filtered.slice(
      ((page ?? 1) - 1) * (limit ?? this.fakeRepository.length),
      (page ?? 1) * (limit ?? this.fakeRepository.length),
    );

    return { list: filtredEntities, amount: filtered.length };
  }

  public async findIn({
    where,
  }: Parameters<IBaseRepositoryDTO<Entity>['findIn']>[0]): Promise<
    Array<Entity>
  > {
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
  }: Parameters<IBaseRepositoryDTO<Entity>['findLike']>[0]): Promise<
    Array<Entity>
  > {
    return this.fakeRepository.filter(entity =>
      (Array.isArray(where) ? where : [where]).some(condition =>
        Object.entries(condition).every(([key, value]) => {
          return entity[key as keyof Entity]
            ?.toString()
            ?.includes(value?.toString()?.replace(/^%|%$/g, ''));
        }),
      ),
    );
  }

  public async create(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['create']>[0],
  ): Promise<Entity> {
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
    baseData: Parameters<IBaseRepositoryDTO<Entity>['createMany']>[0],
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

  public async update(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['update']>[0],
  ): Promise<Entity> {
    const findEntity: number = this.fakeRepository.findIndex(
      entity => entity.id === baseData.id,
    );

    this.fakeRepository[findEntity] = {
      ...baseData,
      updated_at: new Date(),
    } as Entity;

    return this.fakeRepository[findEntity];
  }

  public async updateMany(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['updateMany']>[0],
  ): Promise<Array<Entity>> {
    return (baseData as Array<Entity>).map(data => {
      const findEntity: number = this.fakeRepository.findIndex(
        entity => entity.id === data.id,
      );

      this.fakeRepository[findEntity] = { ...data, updated_at: new Date() };

      return this.fakeRepository[findEntity];
    });
  }

  public async delete(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['delete']>[0],
  ): Promise<{
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

  public async deleteMany(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['deleteMany']>[0],
  ): Promise<{
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

  public async softDelete(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['softDelete']>[0],
  ): Promise<{
    raw: string;
    affected: number;
  }> {
    const deleteEntities: Array<Entity> = this.fakeRepository.filter(entity =>
      Object.entries(baseData).every(
        ([key, value]) => entity[key] === value && !entity.deleted_at,
      ),
    );

    deleteEntities.forEach(entity => {
      Object.assign(entity, { deleted_at: new Date() });
    });

    return {
      raw: 'query to softDelete an Entity',
      affected: deleteEntities.length,
    };
  }

  public async softDeleteMany(
    baseData: Parameters<IBaseRepositoryDTO<Entity>['softDeleteMany']>[0],
  ): Promise<{
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
      Object.assign(entity, { deleted_at: new Date() });
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
