import type { IMapperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import { Messages } from '@tools/messages';

export class CreateMapAndPatch {
  private readonly mapperMessages: IMapperDTO;

  public constructor() {
    this.mapperMessages = Messages.getInstance().mappers;
  }

  public execute(): string {
    return `import type { IObjectDTO } fr\om '@dtos/IObjectDTO';

/**
 * ${this.mapperMessages.description.mapAndPatch}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndPatchAttribute<
  Entity extends object,
  DTO extends Partial<Entity>,
>(oldAttributes: Entity, newAttributes: DTO): Entity {
  const isValid = (field: unknown) => field && field !== '';
  Object.keys(newAttributes).forEach(attribute => {
    if (Object.hasOwn(oldAttributes, attribute)) {
      let newValue = (newAttributes as IObjectDTO)[attribute];
      if (!isValid(newValue)) {
        return;
      }
      if (Array.isArray(newValue)) {
        newValue = newValue.map((item, index) => {
          let oldItem = (oldAttributes as Record<string, Array<IObjectDTO>>)[
            attribute
          ][index];
          if (Object.hasOwn(item, 'id') && !isValid(item.id)) {
            const exists = (oldAttributes as Record<string, Array<IObjectDTO>>)[
              attribute
            ].find(oldItem => oldItem.id === item.id);
            if (exists) oldItem = exists;
          }
          if (
            oldItem &&
            typeof item === 'object' &&
            item !== null &&
            !Array.isArray(item)
          ) {
            return mapAndPatchAttribute(oldItem, item as IObjectDTO);
          }
          if (!isValid(item)) {
            return oldItem;
          }
          return item;
        });
        Object.assign(oldAttributes, { [attribute]: newValue });
      } else if (
        typeof newValue === 'object' &&
        !(newValue instanceof Date) &&
        newValue !== null
      ) {
        (oldAttributes as IObjectDTO)[attribute] = mapAndPatchAttribute(
          (oldAttributes as IObjectDTO)[attribute] as IObjectDTO,
          newValue as IObjectDTO,
        );
      } else {
        Object.assign(oldAttributes, { [attribute]: newValue });
      }
    }
  });
  return oldAttributes;
}
`;
  }
}
