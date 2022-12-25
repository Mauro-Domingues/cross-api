export default function createMapAttributeList(): string {
  return `export default async function mapAttributeList(
  newAttributes: any,
  oldAttributes: any,
): Promise<any> {
  // eslint-disable-next-line no-restricted-syntax
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      // eslint-disable-next-line no-param-reassign
      oldAttributes[attribute] = newAttributes[attribute]
    }
  }
  return oldAttributes;
}
`;
}