import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Messages } from '@tools/messages';

export class CreateMapAndUpdate {
  private readonly messages: IMessageDTO;

  public constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    return `import { IObjectDTO } ${'from'} '@dtos/IObjectDTO';

/**
 * ${this.messages.mappers.description.mapAndUpdate}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndUpdateAttribute<
  Entity extends object,
  DTO extends Partial<Entity>,
>(oldAttributes: Entity, newAttributes: DTO): Entity {
  Object.keys(newAttributes).forEach(attribute => {
    if (
      Object.prototype.hasOwnProperty.call(oldAttributes, attribute) &&
      (oldAttributes as IObjectDTO)[attribute] !== undefined
    ) {
      let newValue = (newAttributes as IObjectDTO)[attribute];
      if (Array.isArray(newValue)) {
        newValue = newValue.map((item, index) => {
          let oldItem = (oldAttributes as Record<string, Array<IObjectDTO>>)[
            attribute
          ][index];
          if ('id' in item) {
            const exists = (oldAttributes as Record<string, Array<IObjectDTO>>)[
              attribute
            ].find(oldItem => oldItem.id === item.id);
            if (exists) oldItem = exists;
          }
          if (
            (typeof item === 'object' &&
              item !== null &&
              !Array.isArray(item)) ||
            (Array.isArray(item) && item.some(Array.isArray))
          ) {
            return mapAndUpdateAttribute(
              oldItem as IObjectDTO,
              item as IObjectDTO,
            );
          }
          return item;
        });
        Object.assign(oldAttributes, { [attribute]: newValue });
      } else if (typeof newValue === 'object' && newValue !== null) {
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
