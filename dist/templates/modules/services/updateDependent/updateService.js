import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class UpdateDependentService {
    messages;
    console;
    names;
    fatherNames;
    constructor(names, fatherNames) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
        this.fatherNames = fatherNames;
    }
    execute() {
        if (!this.names || !this.fatherNames) {
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

import { ICacheProviderDTO } from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { I${this.names.upperModuleName}DTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { mapAndUpdateAttribute } from '@utils/mappers/mapAndUpdateAttribute';
import { ${this.names.upperModuleName} } from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import { IResponseDTO } from '@dtos/IResponseDTO';
import { FindOptionsWhere } from 'typeorm';
import { AppDataSource } from '@shared/typeorm/dataSource';

@injectable()
export class Update${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}RepositoryDTO,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProviderDTO,
  ) {}

  public async execute(
    ${this.names.lowerModuleName}Param: FindOptionsWhere<${this.names.upperModuleName}>,
    ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO,
  ): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const trx = AppDataSource.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.findBy(trx, ${this.names.lowerModuleName}Param);

      if (!${this.names.lowerModuleName}) {
        throw new AppError('${this.names.upperModuleName} not found', 404);
      }

      await this.${this.names.pluralLowerModuleName}Repository.update(
        trx,
        mapAndUpdateAttribute(${this.names.lowerModuleName}, ${this.names.lowerModuleName}Data),
      );

      await this.cacheProvider.invalidatePrefix('${this.names.pluralLowerModuleName}');
      await trx.commitTransaction();

      return {
        code: 200,
        message_code: 'OK',
        message: 'successfully updated ${this.names.lowerModuleName}',
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
