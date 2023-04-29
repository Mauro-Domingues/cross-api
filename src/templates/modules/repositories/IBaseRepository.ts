export class CreateIBaseRepository {
  public execute(): string {
    return `import {
  DeepPartial,
  DeleteResult,
  FindOptionsOrder,
  FindOptionsSelect,
  FindOptionsWhere,
  ObjectLiteral,
} from 'typeorm';

export interface IBaseRepositoryDTO<Entity extends ObjectLiteral> {
  findAll(
    page: number,
    limit: number,
    conditions?: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
    relations?: keysOfEntity<Entity>,
  ): Promise<{ list: Entity[]; amount: number }>;
  findBy(
    entityData: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
    relations?: keysOfEntity<Entity>,
  ): Promise<Entity | null>;
  findIn(
    propertyName: string,
    baseData: Entity[keyof Entity][],
    relations?: keysOfEntity<Entity>,
  ): Promise<Entity[]>;
  findLike(
    baseData: { [key in keyof Entity]: string },
    select?: FindOptionsSelect<Entity>,
    order?: FindOptionsOrder<Entity>,
    limit?: number,
  ): Promise<Entity[]>;
  create(entityData: DeepPartial<Entity>): Promise<Entity>;
  update(entityData: Entity): Promise<Entity>;
  delete(entityData: FindOptionsWhere<Entity>): Promise<DeleteResult>;
  softDelete(entityData: FindOptionsWhere<Entity>): Promise<DeleteResult>;
}
`;
  }
}
