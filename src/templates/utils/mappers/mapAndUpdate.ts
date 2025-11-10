import type { IMapperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import { Messages } from '@tools/messages';

export class CreateMapAndUpdate {
  private readonly mapperMessages: IMapperDTO;

  public constructor() {
    this.mapperMessages = Messages.getInstance().mappers;
  }

  public execute(): string {
    return `import type { IObjectDTO } fr\om '@dtos/IObjectDTO';

/**
 * ${this.mapperMessages.description.mapAndUpdate}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndUpdateAttribute<
  Entity extends object,
  DTO extends Partial<Entity>,
>(oldAttributes: Entity, newAttributes: DTO): Entity {
  Object.keys(newAttributes).forEach(attribute => {
    if (Object.hasOwn(oldAttributes, attribute)) {
      let newValue = (newAttributes as IObjectDTO)[attribute];
      if (Array.isArray(newValue)) {
        newValue = newValue.map((item, index) => {
          let oldItem = (oldAttributes as Record<string, Array<IObjectDTO>>)[
            attribute
          ][index];
          if (Object.hasOwn(item, 'id')) {
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
            return mapAndUpdateAttribute(oldItem, item as IObjectDTO);
          }
          return item;
        });
        Object.assign(oldAttributes, { [attribute]: newValue });
      } else if (
        typeof newValue === 'object' &&
        !(newValue instanceof Date) &&
        newValue !== null
      ) {
        (oldAttributes as IObjectDTO)[attribute] = mapAndUpdateAttribute(
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
