import messages from '../../../tools/messages';

export default function createMapAndUpdate(): string {
  return `/**
 * ${messages.mapAndUpdate}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Promise: Entity
 */
export default async function mapAndUpdateAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
  const updatedAttributes: any = oldAttributes;
  for (const attribute in newAttributes) {
    if (oldAttributes?.hasOwnProperty(attribute)) {
      updatedAttributes[attribute] = newAttributes[attribute];
    }
  }
  return updatedAttributes;
}
`;
}
