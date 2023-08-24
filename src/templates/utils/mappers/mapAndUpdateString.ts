import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateMapAndUpdateString {
  private readonly messages: IMessagesDTO;

  constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    return `import { mapAndUpdateAttribute } from './mapAndUpdateAttribute';

/**
 * ${this.messages.mapAndUpdateString}
 * @param oldAttributes string
 * @param newAttributes Object
 * @returns string
 */
export function mapAndUpdateStringify<Type>(
  oldAttributes: string,
  newAttributes: Type,
): string {
  const updatedAttributes: ReturnType<typeof mapAndUpdateAttribute> =
    mapAndUpdateAttribute(JSON.parse(oldAttributes), newAttributes);

  return JSON.stringify(updatedAttributes);
}
`;
  }
}
