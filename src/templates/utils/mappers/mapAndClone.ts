import { IMapperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import { Messages } from '@tools/messages';

export class CreateMapAndClone {
  private readonly mapperMessages: IMapperDTO;

  public constructor() {
    this.mapperMessages = Messages.getInstance().mappers;
  }

  public execute(): string {
    return `import { IObjectDTO } ${'from'} '@dtos/IObjectDTO';

/**
 * ${this.mapperMessages.description.mapAndClone}
 * @param attribute IObjectDTO[keyof IObjectDTO]
 * @returns Promise: Array<IObjectDTO>
 * @param params Array<string>
 */
export function mapAndCloneAttribute<Entity>(
  attribute: Entity[keyof Entity],
  params: Array<keyof Entity>,
): Array<Partial<IObjectDTO>> {
  const objectArray = params.map(param => {
    return {
      [param]: attribute,
    };
  });
  return objectArray;
}
`;
  }
}
