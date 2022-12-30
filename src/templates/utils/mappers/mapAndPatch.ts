export default function createMapAndPatch(): string {
  return `export default async function mapAndPatchAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const patchedAttributes: any = oldAttributes;
  // eslint-disable-next-line no-restricted-syntax
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      // eslint-disable-next-line no-prototype-builtins
      if (oldAttributes?.hasOwnProperty(attribute)) {
        // eslint-disable-next-line no-param-reassign
        patchedAttributes[attribute] = newAttributes[attribute];
      }
    }
  }
  return patchedAttributes;
}
`;
}
