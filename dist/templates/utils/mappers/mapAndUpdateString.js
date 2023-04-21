import { Messages } from '../../../tools/messages.js';

export class CreateMapAndUpdateString {
  messages;
  constructor() {
    this.messages = new Messages().execute();
  }
  execute() {
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
