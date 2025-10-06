import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
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
    return `import { injectable, inject } ${'from'} 'tsyringe';

import { AppError } ${'from'} '@shared/errors/AppError';
import { ICacheProvider } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { updateAttribute } ${'from'} '@utils/mappers';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { instanceToInstance } ${'from'} 'class-transformer';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { IConnection } ${'from'} '@shared/typeorm';
import { Route, Tags, Put, Body, Path } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Update${this.names.upperModuleName}Service {
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

  @Put('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Path() id: string,
    @Body() ${this.names.lowerModuleName}Data: I${
      this.names.upperModuleName
    }DTO,
  ): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const trx = this.connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${
      this.names.pluralLowerModuleName
    }Repository.findBy(
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
        updateAttribute(${this.names.lowerModuleName}, ${
      this.names.lowerModuleName
    }Data),
        trx,
      );

      await this.cacheProvider.invalidatePrefix(
        \`\${this.connection.client}:${this.names.pluralLowerModuleName}\`,
      );
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
