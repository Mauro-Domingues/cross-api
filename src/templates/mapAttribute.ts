export default function createMapAttributeList(): string {
  return `export default async function mapAttributeList(
  newAttributes: any,
  oldAttributes: any,
): Promise<any> {
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      oldAttributes[attribute] = newAttributes[attribute]
    }
  }
  return oldAttributes;
}
`;
}
