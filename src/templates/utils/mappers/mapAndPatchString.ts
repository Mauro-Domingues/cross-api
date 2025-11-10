import type { IMapperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import { Messages } from '@tools/messages';

export class CreateMapAndPatchString {
  private readonly mapperMessages: IMapperDTO;

  public constructor() {
    this.mapperMessages = Messages.getInstance().mappers;
  }

  public execute(): string {
    return `import type { IObjectDTO } fr\om '@dtos/IObjectDTO';
import { mapAndInsertAttribute } fr\om './mapAndInsertAttribute';

/**
 * ${this.mapperMessages.description.patchAndInsert}
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
