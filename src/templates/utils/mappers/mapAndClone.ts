import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Messages } from '@tools/messages';

export class CreateMapAndClone {
  private readonly messages: IMessageDTO;

  public constructor() {
    this.messages = Messages.getInstance().execute();
  }

  public execute(): string {
    return `import { IObjectDTO } ${'from'} '@dtos/IObjectDTO';

/**
 * ${this.messages.mappers.description.mapAndClone}
 * @param attribute IObjectDTO
 * @returns Promise: Array<IObjectDTO>
 * @param params Array<string>
 */
export function mapAndCloneAttribute<Entity>(
  attribute: Partial<Entity>,
  params: Array<keyof Entity>,
): Array<Partial<IObjectDTO>> {
  const objectArray = params.map(param => {
    return {
      [param]: Object.values(attribute)[0],
    };
  });
  return objectArray;
}
`;
  }
}
