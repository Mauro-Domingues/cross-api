import messages from '../../../tools/messages';

export default function createMapAndInsert(): string {
  return `/**
 * ${messages.patchAndInsert}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Promise: Entity
 */
export default async function mapAndInsertAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
  // eslint-disable-next-line no-restricted-syntax
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      // eslint-disable-next-line no-param-reassign
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
