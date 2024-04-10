import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';

export class CreateIDependentRepository {
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<IModuleNameDTO, 'upperModuleName' | 'pluralUpperModuleName'>
      | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { IBaseRepositoryDTO } ${'from'} '@shared/container/modules/repositories/IBaseRepository';

export interface I${
      this.names.pluralUpperModuleName
    }RepositoryDTO extends IBaseRepositoryDTO<${this.names.upperModuleName}> {
  // non-generic methods here
}
`;
  }
}
