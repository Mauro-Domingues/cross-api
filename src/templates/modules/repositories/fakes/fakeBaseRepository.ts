export class CreateFakeBaseRepository {
  public execute(): string {
    return `import { Base } fr\om '@shared/container/modules/entities/Base';
import { v4 as uuid } fr\om 'uuid';
import { ObjectLiteral } fr\om 'typeorm';
import { AppError } fr\om '@shared/errors/AppError';
import { IObjectDTO } fr\om '@dtos/IObjectDTO';
import { IBaseRepository } fr\om '../IBaseRepository';

export abstract class FakeBaseRepository<Entity extends ObjectLiteral & Base>
  implements IBaseRepository<Entity>
{
  protected readonly fakeRepository: Array<Entity> = [];

  public constructor(
    private readonly Entity: new (...args: Array<unknown>) => Entity,
  ) {}

  private checkArray(
    entity: Array<ObjectLiteral>,
    value: Array<Partial<ObjectLiteral>>,
  ): boolean {
    return (
      Array.isArray(entity) &&
      value.every(subValue =>
        entity.some(subEntity => this.parseWhere(subEntity, subValue)),
      )
    );
  }

  private checkObject(
    entity: ObjectLiteral,
    value: Partial<ObjectLiteral>,
  ): boolean {
    return (
      typeof entity === 'object' &&
      entity !== null &&
      Object.entries(value).every(([subKey, subValue]) =>
        this.parseWhere(entity[subKey], subValue),
      )
    );
  }

  private checkProperty<Type extends ObjectLiteral>(
    entity: Type,
    property: keyof Type,
  ): boolean {
    return Object.entries(property).every(([key, value]) => {
      if (Array.isArray(value)) {
        return this.checkArray(entity[key], value);
      }
      if (typeof value === 'object' && value !== null) {
        return this.checkObject(entity[key], value);
      }
      return entity[key] === value;
    });
  }

  protected parseWhere<Type extends ObjectLiteral>(
    entity: Type,
    where: unknown,
  ): boolean {
    if (!where) {
      return true;
    }
    return (Array.isArray(where) ? where : [where]).some(property =>
      this.checkProperty(entity, property),
    );
  }

  protected validateClause(clause?: IObjectDTO | Array<IObjectDTO>): void {
    const hasValidCondition = (Array.isArray(clause) ? clause : [clause]).some(
      singleClause =>
        singleClause &&
        Object.keys(singleClause).some(key => !!singleClause[key]),
    );

    if (!hasValidCondition) {
      throw new AppError(
        'INVALID_CLAUSE',
        'At least one valid condition must be provided.',
      );
    }
  }

  public async exists({
    where,
    withDeleted,
  }: Parameters<IBaseRepository<Entity>['exists']>[0]): Promise<boolean> {
    this.validateClause(where);
    return this.fakeRepository.some(
      entity =>
        this.parseWhere(entity, where) && (withDeleted ?? !entity.deletedAt),
    );
  }

  public async findBy({
    where,
    withDeleted,
  }: Parameters<IBaseRepository<Entity>['findBy']>[0]): Promise<Entity | null> {
    this.validateClause(where);
    const findEntity: Entity | undefined = this.fakeRepository.find(
      entity =>
        this.parseWhere(entity, where) && (withDeleted ?? !entity.deletedAt),
    );

    return findEntity ?? null;
  }

  public async findAll({
    page,
    limit,
    where,
    withDeleted,
  }: Parameters<IBaseRepository<Entity>['findAll']>[0]): Promise<{
    list: Array<Entity>;
    amount: number;
  }> {
    const filtered: Array<Entity> = where
      ? this.fakeRepository.filter(
          entity =>
            this.parseWhere(entity, where) &&
            (withDeleted ?? !entity.deletedAt),
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
    withDeleted,
  }: Parameters<IBaseRepository<Entity>['findIn']>[0]): Promise<Array<Entity>> {
    this.validateClause(where);
    return this.fakeRepository.filter(
      entity =>
        Object.entries(where).every(([key, values]) =>
          (values as Array<Entity[keyof Entity]>).includes(
            entity[key as keyof Entity],
          ),
        ) &&
        (withDeleted ?? !entity.deletedAt),
    );
  }

  public async findLike({
    where,
    withDeleted,
  }: Parameters<IBaseRepository<Entity>['findLike']>[0]): Promise<
    Array<Entity>
  > {
    this.validateClause(where);
    return this.fakeRepository.filter(
      entity =>
        (Array.isArray(where) ? where : [where]).some(condition =>
          Object.entries(condition).every(([key, value]) =>
            entity[key as keyof Entity]
              ?.toString()
              ?.includes(value?.toString()?.replace(/(^%)|(%$)/g, '')),
          ),
        ) &&
        (withDeleted ?? !entity.deletedAt),
    );
  }

  public async create(
    baseData: Parameters<IBaseRepository<Entity>['create']>[0],
  ): Promise<Entity> {
    const base = Object.assign(new this.Entity(), {
      ...baseData,
      id: uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });

    this.fakeRepository.push(base);

    return base;
  }

  public async createMany(
    baseData: Parameters<IBaseRepository<Entity>['createMany']>[0],
  ): Promise<Array<Entity>> {
    return (baseData as Array<Entity>).map(data => {
      const base = Object.assign(new this.Entity(), {
        ...data,
        id: uuid(),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      });

      this.fakeRepository.push(base);

      return base;
    });
  }

  public async update(
    baseData: Parameters<IBaseRepository<Entity>['update']>[0],
  ): Promise<Entity> {
    const findEntity: number = this.fakeRepository.findIndex(
      entity => entity.id === baseData.id,
    );

    Object.assign(this.fakeRepository[findEntity], {
      ...baseData,
      updatedAt: new Date(),
    });

    return this.fakeRepository[findEntity];
  }

  public async updateMany(
    baseData: Parameters<IBaseRepository<Entity>['updateMany']>[0],
  ): Promise<Array<Entity>> {
    return (baseData as Array<Entity>).map(data => {
      const findEntity: number = this.fakeRepository.findIndex(
        entity => entity.id === data.id,
      );

      Object.assign(this.fakeRepository[findEntity], {
        ...data,
        updatedAt: new Date(),
      });

      return this.fakeRepository[findEntity];
    });
  }

  public async delete(
    baseData: Parameters<IBaseRepository<Entity>['delete']>[0],
  ): Promise<{
    raw: string;
    affected: number;
  }> {
    const deleteEntities: Array<Entity> = this.fakeRepository.filter(entity =>
      Object.entries(baseData).every(
        ([key, value]) => entity[key] === value && !entity.deletedAt,
      ),
    );

    deleteEntities.forEach(deleteEntity => {
      this.fakeRepository.splice(this.fakeRepository.indexOf(deleteEntity), 1);
    });

    return {
      raw: 'query to delete an Entity',
      affected: deleteEntities.length,
    };
  }

  public async deleteMany(
    baseData: Parameters<IBaseRepository<Entity>['deleteMany']>[0],
  ): Promise<{
    raw: string;
    affected: number;
  }> {
    const deleteEntities = baseData.reduce<Array<Entity>>((acc, data) => {
      const entitiesToDelete = this.fakeRepository.filter(entity =>
        Object.entries(data).every(
          ([key, value]) => entity[key] === value && !entity.deletedAt,
        ),
      );

      return acc.concat(entitiesToDelete);
    }, []);

    deleteEntities.forEach(deleteEntity => {
      this.fakeRepository.splice(this.fakeRepository.indexOf(deleteEntity), 1);
    });

    return {
      raw: 'query to delete multiple Entities',
      affected: deleteEntities.length,
    };
  }

  public async softDelete(
    baseData: Parameters<IBaseRepository<Entity>['softDelete']>[0],
  ): Promise<{
    raw: string;
    affected: number;
  }> {
    const deleteEntities: Array<Entity> = this.fakeRepository.filter(entity =>
      Object.entries(baseData).every(
        ([key, value]) => entity[key] === value && !entity.deletedAt,
      ),
    );

    deleteEntities.forEach(entity => {
      Object.assign(entity, { deletedAt: new Date() });
    });

    return {
      raw: 'query to softDelete an Entity',
      affected: deleteEntities.length,
    };
  }

  public async softDeleteMany(
    baseData: Parameters<IBaseRepository<Entity>['softDeleteMany']>[0],
  ): Promise<{
    raw: string;
    affected: number;
  }> {
    const deleteEntities = baseData.reduce<Array<Entity>>((acc, data) => {
      const entitiesToDelete = this.fakeRepository.filter(entity =>
        Object.entries(data).every(
          ([key, value]) => entity[key] === value && !entity.deletedAt,
        ),
      );

      return acc.concat(entitiesToDelete);
    }, []);

    deleteEntities.forEach(entity => {
      Object.assign(entity, { deletedAt: new Date() });
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
