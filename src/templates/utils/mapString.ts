export default function createMapStringAttributeList(): string {
  return `export default async function mapStringAttributeList(
  newAttributes: { [key: string]: unknown },
  oldAttributes?: string,
): Promise<string> {
  let attributes: any;
  // eslint-disable-next-line no-restricted-syntax
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      attributes = {
        ...attributes,
        [attribute]: newAttributes[attribute],
      };
    } else if (oldAttributes) {
      const parsedOldAttributes = JSON.parse(oldAttributes);
      attributes = {
        ...attributes,
        [attribute]: parsedOldAttributes[attribute],
      };
    }
  }
  return JSON.stringify(attributes);
}
`;
}
