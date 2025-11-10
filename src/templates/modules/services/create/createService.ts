import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateService extends BaseTemplateModule {
  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { injectable, inject } fr\om 'tsyringe';
import type { ICacheProvider } fr\om '@shared/container/providers/CacheProvider/models/ICacheProvider';
import type { I${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import type { I${this.names.upperModuleName}DTO } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import type { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } fr\om 'class-transformer';
import type { IResponseDTO } fr\om '@dtos/IResponseDTO';
import type { IConnection } fr\om '@shared/typeorm';
import { Route, Tags, Post, Body, Inject } fr\om 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Create${this.names.upperModuleName}Service {
  public constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
  ) {}

  @Post()
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Inject() connection: IConnection,
    @Body() ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO,
  ): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const trx = connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.create(${this.names.lowerModuleName}Data, trx);

      await this.cacheProvider.invalidatePrefix(\`\${connection.client}:${this.names.pluralLowerModuleName}\`);
      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 201,
        messageCode: 'CREATED',
        message: '${this.names.upperModuleName} successfully created',
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
