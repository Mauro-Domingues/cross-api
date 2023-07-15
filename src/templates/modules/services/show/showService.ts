import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class ShowService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly names: Omit<IModuleNamesDTO, 'dbModuleName'> | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import { IResponseDTO } from '@dtos/IResponseDTO';
import { AppDataSource } from '@shared/typeorm/dataSource';
import { Get, Route, Tags, Path } from 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Show${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}RepositoryDTO,
  ) {}

  @Get('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(@Path() id?: string): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const trx = AppDataSource.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.findBy(trx, { id }, []);

      if (!${this.names.lowerModuleName}) {
        throw new AppError('${this.names.upperModuleName} not found', 404);
      }

      await trx.commitTransaction();

      return {
        code: 200,
        message_code: 'OK',
        message: '${this.names.upperModuleName} found successfully',
        data: instanceToInstance(${this.names.lowerModuleName}),
      };
    } catch (error: unknown) {
      await trx.rollbackTransaction();
      throw error;
    } finally {
      await trx.release();
    }
  }
}
`;
  }
}
