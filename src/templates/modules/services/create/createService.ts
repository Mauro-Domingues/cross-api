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
    return `import { instanceToInstance } fr\u006Fm 'class-transformer';
import { Body, Inject, Post, Route, Tags } fr\u006Fm 'tsoa';
import { inject, injectable } fr\u006Fm 'tsyringe';
import type { IResponseDTO } fr\u006Fm '@dtos/IResponseDTO';
import type { I${this.names.upperModuleName}DTO } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import type { ${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import type { I${this.names.pluralUpperModuleName}Repository } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import type { ICacheProvider } fr\u006Fm '@shared/container/providers/CacheProvider/models/ICacheProvider';
import type { IConnection } fr\u006Fm '@shared/typeorm';

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
