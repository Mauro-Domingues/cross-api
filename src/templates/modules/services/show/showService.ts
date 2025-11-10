import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ShowService extends BaseTemplateModule {
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
import { AppError } fr\om '@shared/errors/AppError';
import type { I${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import type { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } fr\om 'class-transformer';
import type { IResponseDTO } fr\om '@dtos/IResponseDTO';
import type { IConnection } fr\om '@shared/typeorm';
import { Get, Route, Tags, Path, Inject } fr\om 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Show${this.names.upperModuleName}Service {
  public constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}Repository,
  ) {}

  @Get('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Inject() connection: IConnection,
    @Path() id: string,
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

      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 200,
        messageCode: 'FOUND',
        message: '${this.names.upperModuleName} found successfully',
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
