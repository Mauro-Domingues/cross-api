export default function createMapAttributeList(): string {
  return `export default async function mapAttributeList<T>(
  newAttributes: any,
  oldAttributes: any,
): Promise<T> {
  // eslint-disable-next-line no-restricted-syntax
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      // eslint-disable-next-line no-prototype-builtins
      if (oldAttributes.hasOwnProperty(attribute)) {
        // eslint-disable-next-line no-param-reassign
        oldAttributes[attribute] = newAttributes[attribute];
      }
    }
  }
  return oldAttributes;
}
`;
}
