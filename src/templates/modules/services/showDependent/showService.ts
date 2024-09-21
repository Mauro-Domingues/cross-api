import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class ShowDependentService {
  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {}

  public execute(): string {
    return `import { injectable, inject } ${'from'} 'tsyringe';
import { AppError } ${'from'} '@shared/errors/AppError';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { instanceToInstance } ${'from'} 'class-transformer';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { IConnection } ${'from'} '@shared/typeorm';
import { Get, Route, Tags, Path } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Show${this.names.upperModuleName}Service {
  public constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }Repository,

    @inject('Connection')
    private readonly connection: IConnection,
  ) {}

  @Get('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(@Path() id?: string): Promise<IResponseDTO<${
    this.names.upperModuleName
  }>> {
    const trx = this.connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${
      this.names.pluralLowerModuleName
    }Repository.findBy(
        { where: { id } },
        trx,
      );

      if (!${this.names.lowerModuleName}) {
        throw new AppError('NOT_FOUND', '${
          this.names.upperModuleName
        } not found', 404);
      }

      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 200,
        message_code: 'FOUND',
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
