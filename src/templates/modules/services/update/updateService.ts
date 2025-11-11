import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class UpdateService extends BaseTemplateModule {
  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { instanceToInstance } fr\om 'class-transformer';
import { Route, Tags, Put, Body, Path, Inject } fr\om 'tsoa';
import { injectable, inject } fr\om 'tsyringe';
import type { IResponseDTO } fr\om '@dtos/IResponseDTO';
import type { I${this.names.upperModuleName}DTO } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import type { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import type { I${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import type { ICacheProvider } fr\om '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { AppError } fr\om '@shared/errors/AppError';
import type { IConnection } fr\om '@shared/typeorm';
import { updateAttribute } fr\om '@utils/mappers';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Update${this.names.upperModuleName}Service {
  public constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
  ) {}

  @Put('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Inject() connection: IConnection,
    @Path() id: string,
    @Body() ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO,
  ): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const trx = connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.findBy(
        {
          where: { id },
          select: { id: true, name: true, description: true },
        },
        trx,
      );

      if (!${this.names.lowerModuleName}) {
        throw new AppError(
          'NOT_FOUND',
          \`${this.names.upperModuleName} not found with id: "\${id}"\`,
          404,
        );
      }

      await this.${this.names.pluralLowerModuleName}Repository.update(
        updateAttribute(${this.names.lowerModuleName}, ${this.names.lowerModuleName}Data),
        trx,
      );

      await this.cacheProvider.invalidatePrefix(\`\${connection.client}:${this.names.pluralLowerModuleName}\`);
      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 200,
        messageCode: 'UPDATED',
        message: 'Successfully updated ${this.names.lowerModuleName}',
        data: instanceToInstance(${this.names.lowerModuleName}),
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
