import { Messages } from '../../../tools/messages.js';

export class CreateMapAndInsert {
  messages;
  constructor() {
    this.messages = new Messages().execute();
  }
  execute() {
    return `/**
 * ${this.messages.patchAndInsert}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndInsertAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Entity {
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      oldAttributes = {
        ...oldAttributes,
        [attribute]: newAttributes[attribute],
      };
    }
  }
  return oldAttributes;
}
`;
  }
}
