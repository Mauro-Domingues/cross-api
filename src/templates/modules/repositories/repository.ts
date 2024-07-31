import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class CreateRepository {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names:
      | Pick<
          IModuleNameDTO,
          'pluralLowerModuleName' | 'pluralUpperModuleName' | 'upperModuleName'
        >
      | undefined,
  ) {
    this.messages = Messages.getInstance().execute();
  }

  public execute(): string {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { BaseRepository } ${'from'} '@shared/container/modules/repositories/BaseRepository';

export class ${this.names.pluralUpperModuleName}Repository
  extends BaseRepository<${this.names.upperModuleName}>
  implements I${this.names.pluralUpperModuleName}Repository
{
  public constructor() {
    super(${this.names.upperModuleName});
  }

  // non-generic methods here
}
`;
  }
}
