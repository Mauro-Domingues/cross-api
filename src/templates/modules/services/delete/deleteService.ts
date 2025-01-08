import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class DeleteService extends BaseTemplateModule {
  public constructor(
    protected readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { injectable, inject } ${'from'} 'tsyringe';
import { AppError } ${'from'} '@shared/errors/AppError';
import { ICacheProvider } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { IConnection } ${'from'} '@shared/typeorm';
import { Route, Tags, Delete, Path } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Delete${this.names.upperModuleName}Service {
  public constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }Repository,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,

    @inject('Connection')
    private readonly connection: IConnection,
  ) {}

  @Delete('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(@Path() id: string): Promise<IResponseDTO<null>> {
    const trx = this.connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${
      this.names.pluralLowerModuleName
    }Repository.exists(
        { where: { id } },
        trx,
      );

      if (!${this.names.lowerModuleName}) {
        throw new AppError('NOT_FOUND', '${
          this.names.upperModuleName
        } not found', 404);
      }

      await this.${
        this.names.pluralLowerModuleName
      }Repository.delete({ id }, trx);

      await this.cacheProvider.invalidatePrefix(
        \`\${this.connection.client}:${this.names.pluralLowerModuleName}\`,
      );
      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 204,
        messageCode: 'DELETED',
        message: 'Successfully deleted ${this.names.lowerModuleName}',
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
