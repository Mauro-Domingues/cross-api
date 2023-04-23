import { IMessagesDTO, Messages } from '@tools/messages.js';

export class CreateMapAndUpdate {
  private messages: IMessagesDTO;

  constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    return `/**
 * ${this.messages.mapAndUpdate}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndUpdateAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Entity {
  for (const attribute in newAttributes) {
    if (oldAttributes?.hasOwnProperty(attribute)) {
      Object.assign(oldAttributes, { [attribute]: newAttributes[attribute] });
    }
  }
  return oldAttributes;
}
`;
  }
}
