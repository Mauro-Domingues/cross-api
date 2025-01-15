import { IMapperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import { Messages } from '@tools/messages';

export class CreateMapAndUpdateString {
  private readonly mapperMessages: IMapperDTO;

  public constructor() {
    this.mapperMessages = Messages.getInstance().mappers;
  }

  public execute(): string {
    return `import { IObjectDTO } ${'from'} '@dtos/IObjectDTO';
import { mapAndUpdateAttribute } ${'from'} './mapAndUpdateAttribute';

/**
 * ${this.mapperMessages.description.mapAndUpdateString}
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
