import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateDependentService {
  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {}

  public execute(): string {
    return `import { injectable, inject } ${'from'} 'tsyringe';
import { ICacheProvider } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { instanceToInstance } ${'from'} 'class-transformer';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { IConnection } ${'from'} '@shared/typeorm';
import { Route, Tags, Post, Body } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Create${this.names.upperModuleName}Service {
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

  @Post()
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Body() ${this.names.lowerModuleName}Data: I${
      this.names.upperModuleName
    }DTO,
  ): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const trx = this.connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${
      this.names.pluralLowerModuleName
    }Repository.create(${this.names.lowerModuleName}Data, trx);

      await this.cacheProvider.invalidatePrefix(
        \`\${this.connection.client}:${this.names.pluralLowerModuleName}\`,
      );
      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 201,
        message_code: 'CREATED',
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
