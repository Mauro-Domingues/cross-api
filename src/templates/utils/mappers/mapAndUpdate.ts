import messages from '../../../tools/messages';

export default function createMapAndUpdate(): string {
  return `/**
 * ${messages.mapAndUpdate}
 */
export default async function mapAndUpdateAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatedAttributes: any = oldAttributes;
  // eslint-disable-next-line no-restricted-syntax
  for (const attribute in newAttributes) {
    // eslint-disable-next-line no-prototype-builtins
    if (oldAttributes?.hasOwnProperty(attribute)) {
      updatedAttributes[attribute] = newAttributes[attribute];
    }
  }
  return updatedAttributes;
}
`;
}
