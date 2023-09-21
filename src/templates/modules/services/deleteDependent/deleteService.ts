import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class DeleteDependentService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names: Omit<IModuleNamesDTO, 'dbModuleName'> | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { injectable, inject } ${'from'} 'tsyringe';

import { AppError } ${'from'} '@shared/errors/AppError';

import { ICacheProviderDTO } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { I${
      this.names.pluralUpperModuleName
    }RepositoryDTO } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { Connection } ${'from'} '@shared/typeorm';
import { Route, Tags, Delete, Path } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Delete${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }RepositoryDTO,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProviderDTO,
  ) {}

  @Delete('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(@Path() id?: string): Promise<IResponseDTO<null>> {
    const trx = Connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${
      this.names.pluralLowerModuleName
    }Repository.exists({ where: { id } }, trx);

      if (!${this.names.lowerModuleName}) {
        throw new AppError('${this.names.upperModuleName} not found', 404);
      }

      await this.${
        this.names.pluralLowerModuleName
      }Repository.delete({ id }, trx);

      await this.cacheProvider.invalidatePrefix(\`\${Connection.client}:${
        this.names.pluralLowerModuleName
      }\`);
      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 204,
        message_code: 'NO_CONTENT',
        message: 'successfully deleted ${this.names.lowerModuleName}',
        data: null,
      };
    } catch (error: unknown) {
      if (trx.isTransactionActive) await trx.rollbackTransaction();
      throw error;
    } finally {
      if (!trx.isReleased) await trx.release();
    }
  }
}
`;
  }
}
