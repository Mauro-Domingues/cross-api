import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';

export class CreateMapAndUpdateString {
  private readonly messages: IMessageDTO;

  public constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    return `import { IObjectDTO } ${'from'} '@dtos/IObjectDTO';
import { mapAndUpdateAttribute } ${'from'} './mapAndUpdateAttribute';

/**
 * ${this.messages.mapAndUpdateString}
 * @param oldAttributes string
 * @param newAttributes Object
 * @returns string
 */
export function mapAndUpdateStringify<DTO extends IObjectDTO>(
  oldAttributes: string,
  newAttributes: DTO,
): string {
  const updatedAttributes: ReturnType<typeof mapAndUpdateAttribute> =
    mapAndUpdateAttribute(JSON.parse(oldAttributes), newAttributes);

  return JSON.stringify(updatedAttributes);
}
`;
  }
}
