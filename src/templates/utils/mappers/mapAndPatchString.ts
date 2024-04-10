import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';

export class CreateMapAndPatchString {
  private readonly messages: IMessageDTO;

  public constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    return `import { IObjectDTO } ${'from'} '@dtos/IObjectDTO';
import { mapAndInsertAttribute } ${'from'} './mapAndInsertAttribute';

/**
 * ${this.messages.patchAndInsert}
 * @param oldAttributes string
 * @param newAttributes Object
 * @returns string
 */
export function mapAndPatchStringify<DTO extends IObjectDTO>(
  oldAttributes: string,
  newAttributes: DTO,
): string {
  const patchedAttributes: ReturnType<typeof mapAndInsertAttribute> =
    mapAndInsertAttribute(JSON.parse(oldAttributes), newAttributes);

  return JSON.stringify(patchedAttributes);
}
`;
  }
}
