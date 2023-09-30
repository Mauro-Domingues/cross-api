import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateMapAndInsert {
  private readonly messages: IMessagesDTO;

  constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    return `import { IObjectDTO } ${'from'} '@dtos/IObjectDTO';

/**
 * ${this.messages.patchAndInsert}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndInsertAttribute<
  Entity extends object,
  DTO extends Partial<Entity>,
>(oldAttributes: Entity, newAttributes: DTO): Entity {
  const isValid = (field: unknown) => field && field !== '';
  Object.keys(newAttributes).forEach(attribute => {
    let newValue = (newAttributes as IObjectDTO)[attribute];
    if (!isValid(newValue)) {
      return;
    }
    if (Array.isArray(newValue)) {
      newValue = newValue.map((item, index) => {
        let oldItem = (oldAttributes as { [key: string]: Array<IObjectDTO> })[
          attribute
        ]
          ? (oldAttributes as { [key: string]: Array<IObjectDTO> })[attribute][
              index
            ]
          : undefined;
        if (
          !isValid(item.id) &&
          Array.isArray((oldAttributes as IObjectDTO)[attribute]) &&
          'id' in item
        ) {
          const exists = (
            oldAttributes as { [key: string]: Array<IObjectDTO> }
          )[attribute].find(oldItem => oldItem.id === item.id);
          if (exists) oldItem = exists;
        }
        if (
          (typeof item === 'object' && item !== null && !Array.isArray(item)) ||
          (Array.isArray(item) && item.some(Array.isArray))
        ) {
          return oldItem
            ? mapAndInsertAttribute(oldItem, item as IObjectDTO)
            : item;
        }
        if (!isValid(item)) {
          return oldItem;
        }
        return item;
      });
    } else if (typeof newValue === 'object' && newValue !== null) {
      newValue = (oldAttributes as IObjectDTO)[attribute]
        ? mapAndInsertAttribute(
            (oldAttributes as IObjectDTO)[attribute] as IObjectDTO,
            newValue as IObjectDTO,
          )
        : newValue;
    }
    oldAttributes = { ...oldAttributes, [attribute]: newValue };
  });
  return oldAttributes;
}
`;
  }
}
