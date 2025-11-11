import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class DeleteService extends BaseTemplateModule {
  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { Delete, Inject, Path, Route, Tags } fr\om 'tsoa';
import { inject, injectable } fr\om 'tsyringe';
import type { IResponseDTO } fr\om '@dtos/IResponseDTO';
import type { I${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import type { ICacheProvider } fr\om '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { AppError } fr\om '@shared/errors/AppError';
import type { IConnection } fr\om '@shared/typeorm';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Delete${this.names.upperModuleName}Service {
  public constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
  ) {}

  @Delete('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Inject() connection: IConnection,
    @Path() id: string,
  ): Promise<IResponseDTO<null>> {
    const trx = connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.exists(
        { where: { id } },
        trx,
      );

      if (!${this.names.lowerModuleName}) {
        throw new AppError(
          'NOT_FOUND',
          \`${this.names.upperModuleName} not found with id: "\${id}"\`,
          404,
        );
      }

      await this.${this.names.pluralLowerModuleName}Repository.delete({ id }, trx);

      await this.cacheProvider.invalidatePrefix(\`\${connection.client}:${this.names.pluralLowerModuleName}\`);
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
